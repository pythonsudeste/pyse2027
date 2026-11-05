import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from './snake_de_bone.png';
import { navLinks } from './navLinks';

const LINK_DE_INSCRICAO = '/';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link 
                href='/'
                className={styles.logo}
            >
                <Image
                    src={logoImg}
                    alt='Logo da PYSE'
                    width={62}
                    height={62}
                />
                <span className={styles.logo_texto}>
                    <strong>
                        Python Sudeste 27
                    </strong>
                    <span>
                        BELO HORIZONTE · MG
                    </span>
                </span>
            </Link>
            <nav className={styles.nav}>
                {navLinks.map((link) =>
                    <Link 
                        key={link.link}
                        href={link.link}
                        className={styles.nav_links}
                    >
                        {link.text}
                    </Link>
                )}
                <Link 
                    href={LINK_DE_INSCRICAO}
                    className={styles.subscribe_link}
                >
                    Inscreva-se
                </Link>
            </nav>
        </header>
    )
};