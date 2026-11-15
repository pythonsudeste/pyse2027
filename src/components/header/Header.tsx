import styles from './Header.module.css';
import Link from 'next/link';
import logoImg from './snake_de_bone.png';
import { navLinks } from './navLinks';
import { LINK_DE_INSCRICAO } from '@/config/ExternalLinks';
import { NewImage } from '@/feature/NewImage';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link 
                href='/'
                className={styles.logo}
            >
                <NewImage
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