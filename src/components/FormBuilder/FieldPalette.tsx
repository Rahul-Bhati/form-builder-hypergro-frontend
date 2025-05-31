import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { useFormStore } from '@/store/formStore';
import { 
  Type, 
  AlignLeft, 
  ChevronDown, 
  CheckSquare, 
  Calendar, 
  Mail, 
  Phone, 
  Hash,
  Circle,
  FileText
} from 'lucide-react';

const fieldTypes = [
  {
    type: 'text' as const,
    label: 'Text Input',
    icon: Type,
    description: 'Single line text input',
  },
  {
    type: 'textarea' as const,
    label: 'Textarea',
    icon: AlignLeft,
    description: 'Multi-line text input',
  },
  {
    type: 'select' as const,
    label: 'Dropdown',
    icon: ChevronDown,
    description: 'Select from options',
  },
  {
    type: 'checkbox' as const,
    label: 'Checkbox',
    icon: CheckSquare,
    description: 'Multiple selection',
  },
  {
    type: 'radio' as const,
    label: 'Radio Button',
    icon: Circle,
    description: 'Single selection',
  },
  {
    type: 'date' as const,
    label: 'Date',
    icon: Calendar,
    description: 'Date picker',
  },
  {
    type: 'email' as const,
    label: 'Email',
    icon: Mail,
    description: 'Email input with validation',
  },
  {
    type: 'phone' as const,
    label: 'Phone',
    icon: Phone,
    description: 'Phone number input',
  },
  {
    type: 'number' as const,
    label: 'Number',
    icon: Hash,
    description: 'Numeric input',
  },
];

const FieldPalette: React.FC = () => {
  const { addField } = useFormStore();

  const handleDragStart = (e: React.DragEvent, fieldType: typeof fieldTypes[0]) => {
    e.dataTransfer.setData('application/json', JSON.stringify({
      type: fieldType.type,
      label: fieldType.label,
      required: false,
      placeholder: `Enter ${fieldType.label.toLowerCase()}`,
      ...(fieldType.type === 'select' || fieldType.type === 'radio' || fieldType.type === 'checkbox' 
        ? { options: ['Option 1', 'Option 2', 'Option 3'] } 
        : {}),
    }));
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleAddField = (fieldType: typeof fieldTypes[0]) => {
    const fieldData = {
      type: fieldType.type,
      label: fieldType.label,
      required: false,
      placeholder: `Enter ${fieldType.label.toLowerCase()}`,
      ...(fieldType.type === 'select' || fieldType.type === 'radio' || fieldType.type === 'checkbox' 
        ? { options: ['Option 1', 'Option 2', 'Option 3'] } 
        : {}),
    };
    
    addField(fieldData);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <FileText className="h-5 w-5 text-gray-600" />
        <h3 className="text-sm font-medium text-gray-900">Field Types</h3>
      </div>

      <div className="space-y-2">
        {fieldTypes.map((fieldType, index) => {
          const Icon = fieldType.icon;
          
          return (
            <motion.div
              key={fieldType.type}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              draggable
              onDragStart={(e:any) => handleDragStart(e, fieldType)}
              onClick={() => handleAddField(fieldType)}
              className="group cursor-pointer"
            >
              <div className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group-hover:bg-blue-50">
                <div className="flex-shrink-0">
                  <Icon className="h-5 w-5 text-gray-500 group-hover:text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 group-hover:text-blue-900">
                    {fieldType.label}
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-blue-700">
                    {fieldType.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-xs text-blue-800">
          <strong>Tip:</strong> Click to add a field or drag and drop to position it exactly where you want.
        </p>
      </div>
    </div>
  );
};

export default FieldPalette;