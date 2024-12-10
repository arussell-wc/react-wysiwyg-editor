import React from 'react';

interface ToolbarProps {
  onBold: () => void;
  onItalic: () => void;
  onUnderline: () => void;
  onFontSize: (size: string) => void;
  onColor: (color: string) => void;
  onLink: () => void;
  onImage: () => void;
  onTemplate: (templateContent: string) => void;
  onUndo: () => void;
  onRedo: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onBold,
  onItalic,
  onUnderline,
  onFontSize,
  onColor,
  onLink,
  onImage,
  onUndo,
  onRedo
}) => {
  return (
    <div className="wysiwyg-toolbar">
      <button onClick={onBold} title="Bold">B</button>
      <button onClick={onItalic} title="Italic">I</button>
      <button onClick={onUnderline} title="Underline">U</button>
      <select onChange={(e) => onFontSize(e.target.value)}>
        <option value="12px">12px</option>
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="24px">24px</option>
      </select>
      <input data-testid="color-input" type="color" onChange={(e) => onColor(e.target.value)} />
      <button onClick={onLink} title="Add Link">🔗</button>
      <button onClick={onImage} title="Add Image">📷</button>
      <button onClick={onUndo} title="Undo">↩️</button>
      <button onClick={onRedo} title="Redo">↪️</button>
    </div>
  );
};