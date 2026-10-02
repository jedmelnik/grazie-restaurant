export const site = {
  name: "Grazie Restaurant",
  shortName: "Grazie",
  wordmark: "Grazie",
  tagline: "Italian-American dining on Grant Avenue since 1998",
  description:
    "Grazie Restaurant is a family-run Italian-American bistro in downtown Novato. Breakfast, lunch, and dinner with pasta, panini, salads, and classics - call (415) 897-5181.",
  phone: "(415) 897-5181",
  phoneHref: "tel:+14158975181",
  email: "grazierestaurant@yahoo.com",
  address: {
    street: "823 Grant Ave",
    city: "Novato",
    state: "CA",
    zip: "94945",
    full: "823 Grant Ave, Novato, CA 94945",
  },
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Grazie+Restaurant,+823+Grant+Ave,+Novato,+CA+94945",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.8!2d-122.5695!3d38.1075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085e3c0e0e0e0e0%3A0x0!2s823+Grant+Ave%2C+Novato%2C+CA+94945!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  sourceUrl: "http://www.grazie-restaurant.com/",
  facebookUrl: "https://www.facebook.com/GrazieRestaurant",
  yelpUrl: "https://www.yelp.com/biz/grazie-novato",
  deliveryNote:
    "Order for pickup by phone, or find us on Grubhub, Uber Eats, DoorDash, and Dine In Marin.",
  since: 1998,
} as const;

export const hours = [
  { day: "Monday", slots: ["9:00 AM - 8:30 PM"] },
  { day: "Tuesday", slots: ["9:00 AM - 8:30 PM"] },
  { day: "Wednesday", slots: ["9:00 AM - 8:30 PM"] },
  { day: "Thursday", slots: ["9:00 AM - 8:30 PM"] },
  { day: "Friday", slots: ["9:00 AM - 9:00 PM"] },
  { day: "Saturday", slots: ["8:00 AM - 9:00 PM"] },
  { day: "Sunday", slots: ["8:00 AM - 8:30 PM"] },
] as const;

export const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
] as const;

export const socialLinks = [
  {
    network: "facebook" as const,
    href: site.facebookUrl,
    label: "Facebook",
  },
  {
    network: "yelp" as const,
    href: site.yelpUrl,
    label: "Yelp",
  },
  {
    network: "google" as const,
    href: site.mapsUrl,
    label: "Google Maps",
  },
] as const;

export const aboutCopy = {
  lead:
    "Offering age-old tradition and timeless recipes passed down through generations, Grazie Restaurant combines cuisine and atmosphere into a dining experience you will not soon forget.",
  body:
    "Quiet and welcoming, Grazie is the kind of place that can feel like a home away from home - spices and homemade cooking fill the air while a friendly wait staff looks after every table. The menu is vast, with traditional Italian specialties alongside modern adaptations, Paleo, gluten-free, and vegan-friendly options, and create-your-own omelets, pastas, and panini.",
  visitNovato:
    "A beloved breakfast spot for Novato locals and always worth a stroll down Grant Avenue - family-owned pride from kitchen to service.",
} as const;

export const reviews = [
  {
    quote:
      "My favorite place for lunch, sitting in the sun with a glass of Sauvignon Blanc and my Favorite Fiesta salad.",
    name: "MCH",
    place: "Novato",
  },
  {
    quote:
      "I recommend their giant, extremely fresh salads and their very nice paninis.",
    name: "Sam C",
    place: "Santa Rosa",
  },
  {
    quote:
      "Best restaurant in Novato. Good food, good service - Hannah the owner is super-duper.",
    name: "Noel F",
    place: "Fairfax",
  },
] as const;

export const festaSpecial = {
  title: "La Festa Italiana",
  price: "$34.99",
  days: "Sunday - Thursday",
  detail:
    "Any pasta entree - spaghetti and meatballs, ravioli of the day, Affumicato pasta, Hanna's penne with chicken, house-made gnocchi, Penne Venezi, or Grazie shrimp pasta - with house salad or soup, plus a glass of house wine, champagne, or soft drink.",
} as const;

export type MenuItem = {
  name: string;
  description?: string;
  note?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    summary: "Eggs, benedicts, scrambles, pancakes, and morning classics.",
    image: "/images/eggs-benedict.jpg",
    imageAlt: "Eggs Benedict at Grazie Restaurant",
    items: [
      {
        name: "Two farm fresh eggs",
        description: "With smoked bacon, link sausage, or ham.",
      },
      {
        name: "Steak & eggs",
        description: "A hearty morning plate with farm eggs.",
      },
      {
        name: "Corned beef or veggie hash & eggs",
      },
      {
        name: "Classic eggs Benedict",
        description: "Canadian bacon, hollandaise.",
      },
      {
        name: "Bacon & avocado Benedict",
      },
      {
        name: "Crab cake Benedict",
      },
      {
        name: "Vegetarian Benedict",
      },
      {
        name: "Boone's banana nut scramble",
      },
      {
        name: "Healthy Grazie special",
      },
      {
        name: "Breakfast burrito",
        description: "Including a vegetarian option.",
      },
      {
        name: "Huevos rancheros",
      },
      {
        name: "Buttermilk pancakes",
      },
      {
        name: "Belgian waffles",
        note: "Weekends only",
      },
      {
        name: "French toast",
        description: "Including stuffed French toast.",
      },
    ],
  },
  {
    id: "starters",
    title: "Starters",
    summary: "Shareable plates to open the meal.",
    image: "/images/calamari.jpg",
    imageAlt: "Calamari appetizer",
    items: [
      { name: "Bruschetta" },
      { name: "Crispy artichokes" },
      { name: "Calamari" },
      { name: "Risotto balls" },
      { name: "Fresh crab cakes" },
      { name: "House-made chips & guacamole" },
      { name: "Creamy mozzarella burrata" },
      { name: "Soup of the day" },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    summary: "Giant, fresh salads - add chicken, shrimp, or salmon.",
    image: "/images/chef-salad.jpg",
    imageAlt: "Chef salad at Grazie",
    items: [
      { name: "Insalata mista" },
      { name: "Caesar salad" },
      { name: "Fiesta salad" },
      { name: "Blackened salmon salad" },
      { name: "Blackened chicken salad" },
      { name: "Boston butter lettuce salad" },
      { name: "Grazie Cobb salad" },
      { name: "Grilled chicken and pear salad" },
      { name: "Take me to Napa salad" },
      { name: "It's Greek to me" },
      { name: "Prosciutto and arugula salad" },
      { name: "Stacked Caprese salad" },
    ],
  },
  {
    id: "panini",
    title: "Panini",
    summary: "Pressed sandwiches on the grill - create your own or pick a favorite.",
    image: "/images/tuna-panini.jpg",
    imageAlt: "Tuna panini",
    items: [
      { name: "Meatball panini" },
      { name: "Portabella Parmesan panini" },
      { name: "Tuna panini" },
      { name: "Ciao Bella" },
      { name: "La Grazie" },
      { name: "BliTaliano" },
      { name: "Pear panini" },
      { name: "Pita panini", note: "Vegan" },
      {
        name: "Create your own panini",
        description: "Mayonnaise, lettuce, onion, tomato, choice of meat and cheese.",
      },
    ],
  },
  {
    id: "grill",
    title: "Off the grill",
    summary: "Burgers, sandwiches, and grilled plates.",
    image: "/images/chicken-club.jpg",
    imageAlt: "Chicken club sandwich",
    items: [
      { name: "Hamburger" },
      { name: "California burger" },
      { name: "Gorgonzola burger" },
      { name: "Patty melt burger" },
      { name: "Veggie burger" },
      { name: "Portobello turkey burger" },
      { name: "Garlic and jalapeno lettuce-wrapped burger" },
      { name: "Grazie club sandwich" },
      { name: "Grilled chicken sandwich with pesto" },
      { name: "Reuben" },
      { name: "Fish tacos" },
      { name: "Blackened shrimp tacos" },
    ],
  },
  {
    id: "pastas",
    title: "Pastas",
    summary: "House pastas, gnocchi, and Italian classics.",
    image: "/images/penne-pasta.jpg",
    imageAlt: "Penne pasta plate",
    items: [
      { name: "Spaghetti and meatballs" },
      { name: "Ravioli of the day" },
      { name: "House-made gnocchi" },
      { name: "Hanna's penne pasta with chicken" },
      { name: "Penne Venezi" },
      { name: "Grazie shrimp pasta" },
      { name: "Affumicato pasta" },
      { name: "Eggplant Parmesan with pasta" },
      { name: "Molto II Monzo" },
    ],
  },
  {
    id: "specials",
    title: "Lunch & dinner specials",
    summary: "Daily specials and the La Festa Italiana pasta deal.",
    image: "/images/food-special.jpg",
    imageAlt: "Dinner special plate",
    items: [
      {
        name: "La Festa Italiana",
        description: festaSpecial.detail,
        note: `${festaSpecial.price} · ${festaSpecial.days}`,
      },
      {
        name: "Lunch specials",
        description: "Ask your server for today's lunch board.",
      },
      {
        name: "Dinner specials",
        description: "Seasonal entrees and chef features.",
      },
      {
        name: "Create your own personal size pizza",
      },
      {
        name: "Parmesan crusted scallops",
      },
    ],
  },
];

export const gallery = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Dining at Grazie Restaurant",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Table setting at Grazie",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Italian dishes at Grazie",
  },
  {
    src: "/images/food-pasta-plate.jpg",
    alt: "Pasta plate",
  },
  {
    src: "/images/food-salad.jpg",
    alt: "Fresh salad",
  },
  {
    src: "/images/pancakes.jpg",
    alt: "Pancakes for breakfast",
  },
] as const;
