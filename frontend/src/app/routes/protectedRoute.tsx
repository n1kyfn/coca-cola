import { useAppSelector } from "app/providers/store/hooks"
import type { PropsWithChildren } from "react"
import { Navigate } from "react-router"
import { routePaths } from "shared/config/routePaths"

export default function ProtectedRoute({ children }: PropsWithChildren) {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    
    if (!isAuth) return <Navigate to={routePaths.login} replace />
    return <>{children}</>
}
