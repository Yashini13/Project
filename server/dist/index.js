"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Boilded Egg",
            price: 40,
            text: "Delicious and fluffy egg make a great break start",
            image: "/images/egg.png",
            type: "breakfast",
            location:"https://maps.app.goo.gl/Ssj8bSL5Q9k64xdM9"
        },
        {
            name: "RAMEN",
            price: 125,
            text: "Indulge in a symphony of flavors with each slurp of our tantalizing ramen, where savory broth dances with perfectly cooked noodles, creating an unforgettable culinary journey.",
            image: "/images/ramen.png",
            type: "lunch",
            location:"https://maps.app.goo.gl/6U6bKw3A9sXFn8eA7"
        },
        {
            name: "GRILLED CHICKEN",
            price: 300,
            text: "Sink your teeth into succulent, tender grilled chicken, seared to perfection and bursting with smoky, savory goodness",
            image: "/images/chicken.png",
            type: "dinner",
            location: "https://maps.app.goo.gl/1bjEZZMyBkQRkNbf6"
        },
        {
            name: "CAKE",
            price: 318,
            text: "Delight in a heavenly slice of cake, where moist layers of decadent goodness intertwine with creamy frosting, creating a symphony of sweetness that melts in your mouth.",
            image: "/images/cake.png",
            type: "breakfast",
            location: "https://maps.app.goo.gl/PmCAc6xFJ9vxoVXU9"
        },
        {
            name: "BURGER",
            price: 170,
            text: "Savor the juiciness of a perfectly grilled burger, nestled between soft buns and layered with fresh ingredients, delivering a burst of flavors with every bite.",
            image: "/images/burger.png",
            type: "lunch",
            location: "https://maps.app.goo.gl/KmCnvJdpRpStXb617"
        },
        {
            name: "PANCAKE",
            price: 125,
            text: "Embark on a journey of fluffy indulgence with our pancakes, each golden-brown disc a canvas for your favorite toppings, drizzled with syrup, and promising a taste of pure morning bliss.",
            image: "/images/pancake.png",
            type: "dinner",
            location: "https://maps.app.goo.gl/5u3s7DADALLSPAom7"
        },
    ];
    res.json(foodData);
});
app.get('/food', (req, res) => {
    res.json(foodData);
  });
  
 
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map