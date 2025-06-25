import PublicNavBar from "@/components/PublicNavBar"


export default async function MainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {


    return (
        <main className="relative">
            {/* Render PrivateNavBar if user exists, otherwise PublicNavBar */}
            {<PublicNavBar />}


            {/* Render the children */}
            <section className="pt-36 ">
                {children}
            </section>
        </main>
    )
}