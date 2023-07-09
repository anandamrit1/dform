import classNames from 'classnames'
import ContentEditable from 'react-contenteditable'

export type ContentEditableInputProps = {
  className: string,
  value: string,
  onChange: (value: string) => void,
  placeholder?: string,
}

function ContentEditableInput({className, value, onChange, placeholder}: ContentEditableInputProps) {
  return (
    <ContentEditable
      placeholder={placeholder}
      className={classNames('outline-none hover:bg-gray-100 focus:bg-gray-100 cursor-text rounded-md w-full px-2 py-3', className)}
      onChange={(e) => onChange(e.target.value)}
      html={value} 
      />
  )
}

export default ContentEditableInput
