export const getAQILabel = (aqi) => {
  switch (aqi) {
    case 1:
      return "Good";

    case 2:
      return "Fair";

    case 3:
      return "Moderate";

    case 4:
      return "Poor";

    case 5:
      return "Very Poor";

    default:
      return "Unknown";
  }
};

export const getAQIColor = (aqi) => {
  switch (aqi) {
    case 1:
      return "text-green-400";

    case 2:
      return "text-lime-400";

    case 3:
      return "text-yellow-400";

    case 4:
      return "text-orange-400";

    case 5:
      return "text-red-500";
      F;
    default:
      return "text-white";
  }
};
