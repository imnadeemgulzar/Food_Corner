import React from "react";
import MenuItem from "../components/MenuItem";

const Menu = () => {
  const burgerList = [
    {
      id: 14,
      title: "Ice-Cream",
      price: 4.5,
      src: "/ice-cream-4.jpg",
      description:
        "Indulge in creamy bliss with our delightful ice cream. Choose from a variety of flavors, from classic vanilla to exotic combinations.",
    },
    {
      id: 1,
      title: "Classic Beef Bliss",
      price: 9.99,
      src: "/burger.jpg",
      description:
        "Our Classic Beef Bliss burger is a timeless favorite. A juicy beef patty, perfectly seasoned and grilled to perfection, topped with fresh lettuce, tomato, cheddar cheese, and our secret special sauce, all sandwiched between a soft sesame seed bun .",
    },
    {
      id: 2,
      title: "Pizza",
      price: 12.99,
      src: "/pizza.jpg",
      description:
        "Explore the world of pizza perfection! Our oven-baked creations feature a medley of fresh ingredients, gooey cheese, and a crispy crust.",
    },
    {
      id: 11,
      title: "pizza",
      price: 8.99,
      src: "/ice-cream-1.jpg",
      description:
        "A classic burger experience - juicy grilled patty, fresh lettuce, ripe tomatoes, and savory condiments in a perfect harmony of flavors.",
    },
    {
      id: 4,
      title: "Ice-Cream",
      price: 4.5,
      src: "/pizza-3.jpg",
      description:
        "Indulge in creamy bliss with our delightful ice cream. Choose from a variety of flavors, from classic vanilla to exotic combinations.",
    },
    {
      id: 15,
      title: "Ice-Cream",
      price: 4.5,
      src: "/ice-cream-5.jpg",
      description:
        "Indulge in creamy bliss with our delightful ice cream. Choose from a variety of flavors, from classic vanilla to exotic combinations.",
    },
    {
      id: 5,
      title: "pizza",
      price: 8.99,
      src: "/pizza-2.jpg",
      description:
        "A classic burger experience - juicy grilled patty, fresh lettuce, ripe tomatoes, and savory condiments in a perfect harmony of flavors.",
    },
    {
      id: 12,
      title: "Ice-Cream",
      price: 4.5,
      src: "/ice-cream-2.jpg",
      description:
        "Indulge in creamy bliss with our delightful ice cream. Choose from a variety of flavors, from classic vanilla to exotic combinations.",
    },
    {
      id: 5,
      title: "Ice-Cream",
      price: 4.5,
      src: "/pizza-4.jpg",
      description:
        "Indulge in creamy bliss with our delightful ice cream. Choose from a variety of flavors, from classic vanilla to exotic combinations.",
    },
    {
      id: 7,
      title: "Spicy Jalapeño Fiesta Burger",
      price: 10.99,
      src: "/burger-2.jpg",
      description:
        "Heat up your taste buds with our Spicy Jalapeño Fiesta Burger. This zesty creation features a seasoned beef patty, melted pepper jack cheese, crispy bacon, fresh jalapeños, and a spicy chipotle mayo, all served on a toasted brioche bun.",
    },
    {
      id: 6,
      title: "Ice-Cream",
      price: 4.5,
      src: "/pizza-5.jpg",
      description:
        "Indulge in creamy bliss with our delightful ice cream. Choose from a variety of flavors, from classic vanilla to exotic combinations.",
    },

    {
      id: 8,
      title: "Mushroom Swiss Delight",
      price: 12.49,
      src: "/burger-3.jpg",
      description:
        " Indulge in the savory goodness of our Mushroom Swiss Delight. A succulent beef patty topped with sautéed mushrooms, melted Swiss cheese, caramelized onions, and a touch of truffle aioli, nestled in a warm pretzel bun.",
    },
    {
      id: 10,
      title: "Pizza",
      price: 12.99,
      src: "/ice-cream.jpg",
      description:
        "Explore the world of pizza perfection! Our oven-baked creations feature a medley of fresh ingredients, gooey cheese, and a crispy crust.",
    },
    {
      id: 9,
      title: "Veggie Garden Medley Burger",
      price: 8.99,
      src: "/burger-4.jpg",
      description:
        " For our vegetarian enthusiasts, the Veggie Garden Medley Burger is a delight for your palate. A flavorful veggie patty made with a blend of quinoa, black beans, and fresh vegetables, topped with avocado, sprouts, tomato, and a tangy herb-infused yogurt sauce on a whole wheat bun.",
    },

    {
      id: 13,
      title: "Ice-Cream",
      price: 4.5,
      src: "/ice-cream-3.jpg",
      description:
        "Indulge in creamy bliss with our delightful ice cream. Choose from a variety of flavors, from classic vanilla to exotic combinations.",
    },
  ];
  return (
    <div>
      <h1
        style={{
          backgroundImage: " linear-gradient(#2D5E2E,#98BC62)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "currentColor",
          transform: "skew(-20deg)",
        }}
        className="text-5xl text-transparent font-bold leading-[60px] my-8 text-center"
      >
        Menu
      </h1>
      <div className="flex gap-[55px] flex-wrap">
        {burgerList.map((menuItem) => (
          <MenuItem menuItem={menuItem} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
