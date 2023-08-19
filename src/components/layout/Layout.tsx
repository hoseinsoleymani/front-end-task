import { PropsWithChildren } from 'react'
import { Nav } from '../shared'

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <header className="container">

                <Nav />
            </header>



            <main className='mb-10'>
                {children}
            </main>
        </>
    )
}
