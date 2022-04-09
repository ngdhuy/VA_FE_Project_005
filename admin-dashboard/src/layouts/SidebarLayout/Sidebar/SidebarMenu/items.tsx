import { ReactNode } from 'react';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';

export interface MenuItem {
  link?: string; 
  icon?: ReactNode; 
  badge?: string; 
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '', 
    items: [
      {
        name: 'Overview', 
        link: '/overview', 
        icon: DesignServicesTwoToneIcon
      }
    ]
  }, 
  {
    heading: 'Dashboards', 
    items: [
      {
        name: 'Crypto', 
        link: '/dashboards/crypto', 
        icon: BrightnessLowTwoToneIcon
      },
      {
        name: 'Messenger', 
        link: '/dashboards/messenger', 
        icon: MmsTwoToneIcon
      }
    ]
  }, 
  {
    heading: "Management", 
    items: [
      {
        name: 'Transactions', 
        link: '/management/transactions', 
        icon: TableChartTwoToneIcon
      }, 
      {
        name: 'User profile', 
        link: '/management/profile', 
        icon: AccountCircleTwoToneIcon,
        items: [
          {
            name: 'Profile details', 
            link: 'management/profile/details'
          },
          {
            name: 'User settings', 
            link: 'management/profile/settings'
          }
        ]
      }
    ]
  },
  {
    heading: 'Components',
    items: [
      {
        name: 'Buttons', 
        link: '/components/buttons', 
        icon: BallotTwoToneIcon
      },
      {
        name: 'Modals', 
        link: '/components/modals', 
        icon: BeachAccessTwoToneIcon
      },
      {
        name: 'Accordions', 
        link: '/components/accordions', 
        icon: EmojiEventsTwoToneIcon
      },
      {
        name: 'Tabs', 
        link: '/components/tabs', 
        icon: FilterVintageTwoToneIcon
      },
      {
        name: 'Badges', 
        link: '/components/badges', 
        icon: HowToVoteTwoToneIcon
      },
      {
        name: 'Tooltips', 
        link: '/components/tooltips', 
        icon: LocalPharmacyTwoToneIcon
      },
      {
        name: 'Avatars', 
        link: '/components/avatars', 
        icon: RedeemTwoToneIcon
      },
      {
        name: 'Cards', 
        link: '/components/cards', 
        icon: SettingTwoToneIcon
      },
      {
        name: 'Forms', 
        link: '/components/forms', 
        icon: TrafficTwoToneIcon
      }
    ]
  },
  {
    heading: 'Extra Pages', 
    items: [
      {
        name: 'Status',
        icon: VerifiedUserTwoToneIcon, 
        link: '/status', 
        items: [
          {
            name: 'Error 404', 
            link: '/status/404'
          }, 
          {
            name: 'Error 500', 
            link: '/status/500'
          }, 
          {
            name: 'Maintenance', 
            link: '/status/maintenance'
          }, 
          {
            name: 'Coming Soon', 
            link: '/status/coming-soon'
          }
        ]
      }
    ]
  }
];

export default menuItems;