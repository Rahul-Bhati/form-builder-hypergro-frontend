import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { useFormStore } from '@/store/formStore';
import FieldPalette from './FormBuilder/FieldPalette';
import FormCanvas from './FormBuilder/FormCanvas';
import FieldConfigPanel from './FormBuilder/FieldConfigPanel';
import PreviewPanel from './FormBuilder/PreviewPanel';
import FormHeader from './FormBuilder/FormHeader';
import TemplateManager from './FormBuilder/TemplateManager';
import { useToast } from '@/hooks/use-toast';
import {
  Eye,
  EyeOff,
  Save,
  Share2,
  Monitor,
  Tablet,
  Smartphone,
  Layers,
  FileText } from
'lucide-react';

const FormBuilder: React.FC = () => {
  const {
    currentForm,
    previewMode,
    showPreview,
    createNewForm,
    saveForm,
    setPreviewMode,
    togglePreview
  } = useFormStore();

  const { toast } = useToast();

  useEffect(() => {
    // Create a new form if none exists
    if (!currentForm) {
      createNewForm();
    }
  }, [currentForm, createNewForm]);

  const handleSave = () => {
    const formId = saveForm();
    if (formId) {
      toast({
        title: 'Form Saved',
        description: `Form saved successfully with ID: ${formId}`
      });
    }
  };

  const handleShare = () => {
    if (currentForm) {
      const shareUrl = `${window.location.origin}/form/${currentForm.id}`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        toast({
          title: 'Link Copied',
          description: 'Form share link copied to clipboard'
        });
      });
    }
  };

  const getPreviewIcon = () => {
    switch (previewMode) {
      case 'tablet':
        return Tablet;
      case 'mobile':
        return Smartphone;
      default:
        return Monitor;
    }
  };

  const PreviewIcon = getPreviewIcon();

  if (!currentForm) {
    return (
      <div className="flex items-center justify-center h-screen" data-id="j420rtacq" data-path="src/components/FormBuilder.tsx">
        <div className="text-center" data-id="of21kbhef" data-path="src/components/FormBuilder.tsx">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4" data-id="kk1vargrb" data-path="src/components/FormBuilder.tsx"></div>
          <p className="text-gray-600" data-id="e60idg038" data-path="src/components/FormBuilder.tsx">Loading Form Builder...</p>
        </div>
      </div>);

  }

  return (
    <div className="h-screen flex flex-col bg-gray-50" data-id="zxnusgj3q" data-path="src/components/FormBuilder.tsx">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between" data-id="qnkr9qq4h" data-path="src/components/FormBuilder.tsx">
        <div className="flex items-center space-x-4" data-id="d6h1ry3nl" data-path="src/components/FormBuilder.tsx">
          <div className="flex items-center space-x-2" data-id="h1df3qs7v" data-path="src/components/FormBuilder.tsx">
            <img src="./logo.png" alt="" className="h-10 w-10 text-blue-600"/>
            {/* <FileText className="h-6 w-6 text-blue-600" data-id="elyvvk1te" data-path="src/components/FormBuilder.tsx" /> */}
            <h1 className="text-xl font-semibold text-gray-900" data-id="4yq43gfml" data-path="src/components/FormBuilder.tsx">Form Builder</h1>
          </div>
          <div className="h-6 w-px bg-gray-300" data-id="sz3t1n3eu" data-path="src/components/FormBuilder.tsx" />
          <FormHeader data-id="yvkfprcq6" data-path="src/components/FormBuilder.tsx" />
        </div>

        <div className="flex items-center space-x-2" data-id="g16eqayg5" data-path="src/components/FormBuilder.tsx">
          {/* Preview Mode Toggle */}
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1" data-id="sibsgnl5m" data-path="src/components/FormBuilder.tsx">
            <Button
              variant={previewMode === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setPreviewMode('desktop')}
              className="h-8 w-8 p-0" data-id="4eoqhl8dg" data-path="src/components/FormBuilder.tsx">

              <Monitor className="h-4 w-4" data-id="s67bpocsz" data-path="src/components/FormBuilder.tsx" />
            </Button>
            <Button
              variant={previewMode === 'tablet' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setPreviewMode('tablet')}
              className="h-8 w-8 p-0" data-id="tyzmlall2" data-path="src/components/FormBuilder.tsx">

              <Tablet className="h-4 w-4" data-id="a56wh77oi" data-path="src/components/FormBuilder.tsx" />
            </Button>
            <Button
              variant={previewMode === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setPreviewMode('mobile')}
              className="h-8 w-8 p-0" data-id="tg68jme6k" data-path="src/components/FormBuilder.tsx">

              <Smartphone className="h-4 w-4" data-id="3p165r4g8" data-path="src/components/FormBuilder.tsx" />
            </Button>
          </div>

          {/* Preview Toggle */}
          <Button
            variant={showPreview ? 'default' : 'outline'}
            size="sm"
            onClick={togglePreview}
            className="flex items-center space-x-2" data-id="a4pu7y4dr" data-path="src/components/FormBuilder.tsx">

            {showPreview ?
            <EyeOff className="h-4 w-4" data-id="53aptnx8s" data-path="src/components/FormBuilder.tsx" /> :

            <Eye className="h-4 w-4" data-id="v8n0gfaxe" data-path="src/components/FormBuilder.tsx" />
            }
            <span data-id="lzqre6d5m" data-path="src/components/FormBuilder.tsx">{showPreview ? 'Hide' : 'Show'} Preview</span>
          </Button>

          {/* Save Button */}
          <Button onClick={handleSave} size="sm" className="flex items-center space-x-2" data-id="gfjnq06rb" data-path="src/components/FormBuilder.tsx">
            <Save className="h-4 w-4" data-id="eck36fzbq" data-path="src/components/FormBuilder.tsx" />
            <span data-id="mph8h02mu" data-path="src/components/FormBuilder.tsx">Save</span>
          </Button>

          {/* Share Button */}
          <Button onClick={handleShare} variant="outline" size="sm" className="flex items-center space-x-2" data-id="ju38gf0tg" data-path="src/components/FormBuilder.tsx">
            <Share2 className="h-4 w-4" data-id="0deo5iclv" data-path="src/components/FormBuilder.tsx" />
            <span data-id="wja2rwjxx" data-path="src/components/FormBuilder.tsx">Share</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden" data-id="gw98tv5ez" data-path="src/components/FormBuilder.tsx">
        <ResizablePanelGroup direction="horizontal" className="h-full" data-id="im6mg4sgd" data-path="src/components/FormBuilder.tsx">
          {/* Left Panel - Field Palette & Templates */}
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30} data-id="8ecmwt1uz" data-path="src/components/FormBuilder.tsx">
            <div className="h-full bg-white border-r border-gray-200" data-id="m1swy9wmo" data-path="src/components/FormBuilder.tsx">
              <div className="p-4 space-y-6 overflow-y-auto h-full custom-scrollbar" data-id="59a96nd01" data-path="src/components/FormBuilder.tsx">
                <FieldPalette data-id="lwuy4io6v" data-path="src/components/FormBuilder.tsx" />
                <TemplateManager data-id="kv18n3wqi" data-path="src/components/FormBuilder.tsx" />
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle data-id="viww4f43b" data-path="src/components/FormBuilder.tsx" />

          {/* Center Panel - Form Canvas */}
          <ResizablePanel defaultSize={showPreview ? 40 : 60} minSize={30} data-id="qtbxes9ti" data-path="src/components/FormBuilder.tsx">
            <motion.div
              layout
              className="h-full bg-gray-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }} data-id="1mmbjwpxa" data-path="src/components/FormBuilder.tsx">

              <FormCanvas data-id="0o5u99yl3" data-path="src/components/FormBuilder.tsx" />
            </motion.div>
          </ResizablePanel>

          {showPreview &&
          <>
              <ResizableHandle withHandle data-id="sg3nifszh" data-path="src/components/FormBuilder.tsx" />
              
              {/* Preview Panel */}
              <ResizablePanel defaultSize={40} minSize={30} data-id="l59k8dwe1" data-path="src/components/FormBuilder.tsx">
                <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="h-full" data-id="k54wbeq91" data-path="src/components/FormBuilder.tsx">

                  <PreviewPanel data-id="3ku9xi1oe" data-path="src/components/FormBuilder.tsx" />
                </motion.div>
              </ResizablePanel>
            </>
          }

          {!showPreview &&
          <>
              <ResizableHandle withHandle data-id="7it1686zl" data-path="src/components/FormBuilder.tsx" />
              
              {/* Right Panel - Field Configuration */}
              <ResizablePanel defaultSize={20} minSize={15} maxSize={30} data-id="sozn4j6os" data-path="src/components/FormBuilder.tsx">
                <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full" data-id="xcuw56zcy" data-path="src/components/FormBuilder.tsx">

                  <FieldConfigPanel data-id="5b2n3msn4" data-path="src/components/FormBuilder.tsx" />
                </motion.div>
              </ResizablePanel>
            </>
          }
        </ResizablePanelGroup>
      </div>
    </div>);

};

export default FormBuilder;