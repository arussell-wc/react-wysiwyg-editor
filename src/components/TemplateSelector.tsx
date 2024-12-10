import React from 'react';

interface Template {
  name: string;
  content: string;
}

interface TemplateSelectorProps {
  templates: Template[];
  onSelectTemplate: (template: Template) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  onSelectTemplate,
}) => {
  return (
    <select onChange={(e) => {
      const template = templates.find(t => t.name === e.target.value);
      if (template) {
        onSelectTemplate(template);
      }
    }}>
      <option value="">Select a template...</option>
      {templates.map((template) => (
        <option key={template.name} value={template.name}>
          {template.name}
        </option>
      ))}
    </select>
  );
};