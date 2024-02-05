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
      </ul>
    </>
  );
}
