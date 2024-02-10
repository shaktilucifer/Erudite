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
          <div key={book.name}>
            <div>{book.name}</div>
            <div>{book.author}</div>
            <div>{book.ISBN}</div>
            <div>{book.pages}</div>
          </div>
        ))}
      </div>
    </>
  );
}
