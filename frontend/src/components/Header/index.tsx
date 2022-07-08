type Props = {
  children: JSX.Element[];
};
export default function Header({ children }: Props) {
  return (
    <header className='flex items-center justify-between'>
      {children.map((item, key) => item)}
    </header>
  );
}
