import React from 'react';
import { FormField } from '@/store/formStore';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

interface FieldRendererProps {
  field: FormField;
  isEditing?: boolean;
  value?: any;
  onChange?: (value: any) => void;
  error?: string;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({
  field,
  isEditing = false,
  value,
  onChange,
  error,
}) => {
  const handleChange = (newValue: any) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  const renderFieldInput = () => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'phone':
        return (
          <Input
            type={field.type === 'email' ? 'email' : field.type === 'phone' ? 'tel' : 'text'}
            placeholder={field.placeholder}
            value={value || ''}
            onChange={(e) => handleChange(e.target.value)}
            disabled={isEditing}
            className={error ? 'border-red-500' : ''}
          />
        );

      case 'number':
        return (
          <Input
            type="number"
            placeholder={field.placeholder}
            value={value || ''}
            onChange={(e) => handleChange(e.target.value)}
            disabled={isEditing}
            min={field.validation?.min}
            max={field.validation?.max}
            className={error ? 'border-red-500' : ''}
          />
        );

      case 'textarea':
        return (
          <Textarea
            placeholder={field.placeholder}
            value={value || ''}
            onChange={(e) => handleChange(e.target.value)}
            disabled={isEditing}
            rows={4}
            className={error ? 'border-red-500' : ''}
          />
        );

      case 'select':
        return (
          <Select
            value={value || ''}
            onValueChange={handleChange}
            disabled={isEditing}
          >
            <SelectTrigger className={error ? 'border-red-500' : ''}>
              <SelectValue placeholder={field.placeholder || 'Select an option'} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'checkbox':
        return (
          <div className="space-y-2">
            {field.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox
                  id={`${field.id}-${index}`}
                  checked={Array.isArray(value) ? value.includes(option) : false}
                  onCheckedChange={(checked) => {
                    if (!isEditing) {
                      const currentValue = Array.isArray(value) ? value : [];
                      if (checked) {
                        handleChange([...currentValue, option]);
                      } else {
                        handleChange(currentValue.filter((v: string) => v !== option));
                      }
                    }
                  }}
                  disabled={isEditing}
                />
                <Label
                  htmlFor={`${field.id}-${index}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {option}
                </Label>
              </div>
            ))}
          </div>
        );

      case 'radio':
        return (
          <RadioGroup
            value={value || ''}
            onValueChange={handleChange}
            disabled={isEditing}
          >
            {field.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option}
                  id={`${field.id}-${index}`}
                  disabled={isEditing}
                />
                <Label
                  htmlFor={`${field.id}-${index}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'date':
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-start text-left font-normal ${
                  !value ? 'text-muted-foreground' : ''
                } ${error ? 'border-red-500' : ''}`}
                disabled={isEditing}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {value ? format(new Date(value), 'PPP') : field.placeholder || 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={value ? new Date(value) : undefined}
                onSelect={(date) => handleChange(date?.toISOString())}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        );

      default:
        return (
          <Input
            placeholder={field.placeholder}
            value={value || ''}
            onChange={(e) => handleChange(e.target.value)}
            disabled={isEditing}
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      {/* Field Label */}
      <Label className="text-sm font-medium text-gray-700">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </Label>

      {/* Field Input */}
      {renderFieldInput()}

      {/* Help Text */}
      {field.helpText && (
        <p className="text-xs text-gray-500">{field.helpText}</p>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}

      {/* Validation Info (only in editing mode) */}
      {isEditing && field.validation && (
        <div className="text-xs text-gray-400 space-y-1">
          {field.validation.minLength && (
            <div>Min length: {field.validation.minLength}</div>
          )}
          {field.validation.maxLength && (
            <div>Max length: {field.validation.maxLength}</div>
          )}
          {field.validation.pattern && (
            <div>Pattern: {field.validation.pattern}</div>
          )}
          {field.validation.min !== undefined && (
            <div>Min value: {field.validation.min}</div>
          )}
          {field.validation.max !== undefined && (
            <div>Max value: {field.validation.max}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default FieldRenderer;