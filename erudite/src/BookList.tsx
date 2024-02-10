import { useGetAllBooks } from "./hooks/useGetAllBooks";

interface BookListProps {
  filter: any;
}

export function BookList({ filter }: BookListProps) {
  const { books } = useGetAllBooks();

  return (
    <>
      <div>
        {books.filter(filter).map((book) => (
          <div key={book.name}>{book.name}</div>
        ))}
      </div>
    </>
  );
}
