interface PaginationStatsProps {
  currentPage: number | 'loading...'
  totalPages: number | 'loading...'
  totalResults: number | 'loading...'
}

export const PaginationStats = ({
  currentPage,
  totalPages,
  totalResults,
}: PaginationStatsProps) => {
  return (
    <>
      <div>Results: {totalResults}</div>
      <div>Pages: {totalPages}</div>
      <p>Current page: {currentPage}</p>
    </>
  )
}
