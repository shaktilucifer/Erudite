export function BookInfoForm() {
  return (
    <>
      <div>
        <label>Book Name: </label>
        <input
          type={"text"}
          className="formInput"
          name="bookName"
          placeholder="enter book name"
        />
      </div>
      <div>
        <label>Num pages: </label>
        <input
          type={"number"}
          className="formInput"
          name="bookName"
          placeholder="enter number of pages in the book"
        />
      </div>
    </>
  );
}
