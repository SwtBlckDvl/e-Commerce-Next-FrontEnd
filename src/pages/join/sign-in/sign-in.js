import Link from "next/link";
import JoinLayout from "@/layout/JoinLayout/JoinLayout";
import LoginForm from "@/components/Auth/LoginForm/LoginForm";

import styles from "./sign-in.module.scss";

export default function SignInPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn} >
          <h3> Iniciar Sesión </h3>
          <LoginForm />

          {/* LOGIN */}
          <div className={styles.actions} >
            <Link href="/join/sign-up" >Crear cuenta</Link>
          </div>

        </div>
      </JoinLayout>
    </>
  )
}

