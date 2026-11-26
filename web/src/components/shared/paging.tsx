import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui'

interface PagingProps {
	currentPage: number
	maxPage: number
	onPageBack: () => void
	onPageNext: () => void
	onPageSelect: (page: number) => void
}

export function Paging({
	currentPage,
	maxPage,
	onPageBack,
	onPageNext,
	onPageSelect,
}: PagingProps) {
	function handleBack() {
		if (currentPage === 1) return
		onPageBack()
	}

	function handleNext() {
		if (currentPage === maxPage) return
		onPageNext()
	}

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem onClick={handleBack}>
					<PaginationPrevious />
				</PaginationItem>

				{currentPage >= 4 && (
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				)}
				{currentPage >= 3 && (
					<PaginationItem onClick={() => onPageSelect(currentPage - 2)}>
						<PaginationLink>{currentPage - 2}</PaginationLink>
					</PaginationItem>
				)}
				{currentPage >= 2 && (
					<PaginationItem onClick={() => onPageSelect(currentPage - 1)}>
						<PaginationLink>{currentPage - 1}</PaginationLink>
					</PaginationItem>
				)}
				<PaginationItem>
					<PaginationLink isActive>{currentPage}</PaginationLink>
				</PaginationItem>
				{maxPage - currentPage >= 1 && (
					<PaginationItem onClick={() => onPageSelect(currentPage + 1)}>
						<PaginationLink>{currentPage + 1}</PaginationLink>
					</PaginationItem>
				)}
				{maxPage - currentPage >= 2 && (
					<PaginationItem onClick={() => onPageSelect(currentPage + 2)}>
						<PaginationLink>{currentPage + 2}</PaginationLink>
					</PaginationItem>
				)}
				{maxPage - currentPage > 2 && (
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				)}
				<PaginationItem onClick={handleNext}>
					<PaginationNext />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}
