export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-pearl-100 text-dark-950">
            {children}
        </div>
    )
}
