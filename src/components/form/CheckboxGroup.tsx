import styles from './form.module.css';

interface CheckboxGroupProps {
  label?: string;
  required?: boolean;
  children: React.ReactNode;
  direction?: 'row' | 'column';
}

export default function CheckboxGroup({
  label,
  required,
  children,
  direction = 'row',
}: CheckboxGroupProps) {
  return (
    <>
      {label && (
        <p
          className={styles['form-field__label']}
        >
          {label}
          {required && <span className={styles['form-field--required']}>*</span>}
        </p>
      )}

      <div
        className={
          direction === 'row' 
            ? styles['group--row'] 
            : styles['group--column']
        }
      >
        {children}
      </div>
    </>
  );
}
