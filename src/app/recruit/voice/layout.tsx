const VoiceLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="min-h-screen w-full bg-pearl-100 text-dark-950">
            {children}
        </div>
    )
}
export default VoiceLayout;