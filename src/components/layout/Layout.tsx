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

            {/* <footer className="border-t py-2 px-6 flex items-center justify-end">
                <div className="flex items-center">
                    <span className="text-sm text-primary-200 font-normal">
                        Rows Per Page
                    </span>
                    <div className="mx-6">
                        <SingleSelectBox
              items={[
                { value: "10", id: "1" },
                { value: "20", id: "2" },
                { value: "30", id: "3" },
              ]}
              label=""
              selectedOption={showPerPage}
              setSelected={setShowPerPage}
              name="show-per-page"
              buttonClassNames="h-auto py-0 border-0"
            />
                    </div>
                </div>
            </footer> */}
        </>
    )
}
