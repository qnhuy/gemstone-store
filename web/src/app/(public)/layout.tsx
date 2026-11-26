import { PublicFooter } from './public-footer'
import { PublicHeader } from './public-header'

export default function PublicLayout({ children }: LayoutProps<'/'>) {
	return (
		<div className='flex flex-1 flex-col'>
			<PublicHeader />
			<main className='flex-1'>{children}</main>
			<PublicFooter />
		</div>
	)
}
