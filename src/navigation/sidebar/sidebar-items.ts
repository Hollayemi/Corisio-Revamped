import {
  LayoutDashboard,
  Store,
  UserCheck,
  GitBranch,
  Rocket,
  MapPin,
  BarChart3,
  Users,
  ShieldCheck,
  Activity,
  History,
  Settings,
  Bell,
  LucideIcon,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Overview",
    items: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Growth Analytics",
        url: "/admin/analytics",
        icon: BarChart3,
      },
    ],
  },
  {
    id: 2,
    label: "Store Management",
    items: [
      {
        title: "All Stores",
        url: "/admin/stores",
        icon: Store,
      },
      {
        title: "Pending Verification",
        url: "/admin/stores/pending",
        icon: UserCheck,
      },
      {
        title: "Verified Stores",
        url: "/admin/stores/verified",
        icon: ShieldCheck,
      },
      {
        title: "Suspended Stores",
        url: "/admin/stores/suspended",
        icon: Activity,
      },
    ],
  },
  {
    id: 3,
    label: "Referrals & Boost",
    items: [
      {
        title: "Referral Monitoring",
        url: "/admin/referrals",
        icon: GitBranch,
        subItems: [
          {
            title: "Referral Tree",
            url: "/admin/referrals/tree",
          },
          {
            title: "Pending Referrals",
            url: "/admin/referrals/pending",
          },
          {
            title: "Flagged Referrals",
            url: "/admin/referrals/flagged",
          },
        ],
      },
      {
        title: "Boost Management",
        url: "/admin/boost",
        icon: Rocket,
        subItems: [
          {
            title: "Active Boosts",
            url: "/admin/boost/active",
          },
          {
            title: "Expiring Soon",
            url: "/admin/boost/expiring",
          },
          {
            title: "Override Boost",
            url: "/admin/boost/override",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Location Insights",
    items: [
      {
        title: "Store Density",
        url: "/admin/locations/density",
        icon: MapPin,
      },
    ],
  },
  {
    id: 5,
    label: "System Control",
    items: [
      {
        title: "User Management",
        url: "/admin/users",
        icon: Users,
      },
      {
        title: "Audit Trail",
        url: "/admin/audit",
        icon: History,
      },
      {
        title: "API Monitoring",
        url: "/admin/system/api",
        icon: Activity,
      },
      {
        title: "Notifications",
        url: "/admin/notifications",
        icon: Bell,
      },
      {
        title: "Settings",
        url: "/admin/settings",
        icon: Settings,
        subItems: [
          {
            title: "Admin Profile",
            url: "/admin/settings/profile",
          },
          {
            title: "System Configuration",
            url: "/admin/settings/system",
          },
          {
            title: "Security",
            url: "/admin/settings/security",
          },
        ],
      },
    ],
  },
];