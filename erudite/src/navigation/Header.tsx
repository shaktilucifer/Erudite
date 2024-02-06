interface HeaderProps {}
export function Header({}: HeaderProps) {
  return (
    <>
      <ul>
        <li>
          <a href="/books">Books</a>
        </li>
        <li>
          <a href="/daily">DailyEntry</a>
        </li>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/home1">Home</a>
        </li>
        <li>
          <a href="/home2">Home2</a>
        </li>
        <li>
          <a href="/home3">Home3</a>
        </li>
      </ul>
    </>
  );
}
