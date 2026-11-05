import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from './snake_de_bone.png';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link href='/'>
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
        </header>
    )
};