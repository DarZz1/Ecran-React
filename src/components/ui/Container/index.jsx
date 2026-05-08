import styles from './Container.module.css';

export default function Container({ as: Component = 'div', className = '', children, ...restProps }) {
  return (
    <Component className={`${styles.container} ${className}`} {...restProps}>
      {children}
    </Component>
  );
}