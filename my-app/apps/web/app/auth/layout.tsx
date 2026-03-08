type AuthLayoutProps = {
    children: React.ReactNode
}

const AuthLayout = ({children} : AuthLayoutProps) => {
    return(
        <div className="bg-linear-to-br from-lime-400 to-cyan-400 h-screen flex items-center justify-center">
            {children}
        </div>
    )
} 

export default AuthLayout