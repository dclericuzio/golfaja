"use client"
import { useState } from 'react';
import { links } from '@/app/constants';
import Link from 'next/link';

export default function Navigationbar() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownToggle = (index) => {
        if (openDropdown === index) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(index);
        }
    };

    return (
        <div>
            <ul>
                {links.map((item, i) => (
                    <li key={i}>
                        {item.href ? (
                            <Link href={item.href}>{item.label}</Link>
                        ) : (
                            <>
                                <span onClick={() => handleDropdownToggle(i)} style={{ cursor: 'pointer' }}>
                                    {item.label}
                                </span>
                                {openDropdown === i && (
                                    <ul>
                                        {item.dropdown && item.dropdown.map((subItem, j) => (
                                            <li key={j}>
                                                <Link href={subItem.href}>{subItem.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}