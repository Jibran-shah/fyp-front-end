export function useAvailableDashboards(user) {
  return [
    user?.baseProfile && {
      key: "buyer",
      label: "Buyer Dashboard",
      route: "/buyer/dashboard",
    },

    user?.productSeller && {
      key: "seller",
      label: "Seller Dashboard",
      route: "/seller/dashboard",
    },

    user?.serviceProvider && {
      key: "provider",
      label: "Service Provider Dashboard",
      route: "/provider/dashboard",
    },
  ].filter(Boolean);
}