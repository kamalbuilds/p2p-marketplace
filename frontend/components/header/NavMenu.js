import {  Cog6ToothIcon } from '@heroicons/react/24/outline'
import { IconClockHour1 , IconCoin , IconUser} from '@tabler/icons-react';
import { classNames } from '../../utils/classNames'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { truncate } from '../../utils/string'
require('@solana/wallet-adapter-react-ui/styles.css');
import Router from 'next/router';

const NavMenu = ({ connected, publicKey }) => {
    const menus = [
        {
            icon: IconClockHour1,
            item: 'Activity',
            current: true,
            action: () => Router.push('/')
        },
        {
            icon: IconCoin,
            item: 'Get SOL',
            current: false,
            action: () => Router.push('/exchange')
        },
        {
            icon: Cog6ToothIcon,
            item: 'Huddle Connect',
            current: false,
            action: () => Router.push('/connect')
        },
    ]

    return (
        <nav className="flex flex-1 items-center justify-center">
            <ul className="flex flex-col space-y-10">
                {menus.map(({ icon, item, current, action }, i) => (
                    <NavMenuItem key={i} Icon={icon} item={item} current={current} action={action} />
                ))}
                <li>
                    <WalletMultiButton className="phantom-button" startIcon={<UserCircleIcon style={{ height: 24, width: 24, color: '#15ec3c' }} />}>
                        <span className="text-sm font-semibold text-[#15ec3c]">{connected ? truncate(publicKey.toString()) : 'Connect Wallet'}</span>
                    </WalletMultiButton>
                </li>
            </ul>
        </nav>
    )
}

const NavMenuItem = ({ Icon, item, current, action }) => {
    return (
        <li onClick={action} className={classNames('flex cursor-pointer space-x-3 transition-all hover:text-gray-100', current ? 'text-white' : 'text-[#15ec3c]', 'font-semibold')}>
            <Icon className="h-6 w-6 " />
            <span>{item}</span>
        </li>
    )
}

export default NavMenu
