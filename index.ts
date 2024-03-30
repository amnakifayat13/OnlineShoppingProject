#! /usr/bin/env node
import inquirer from "inquirer";
while (true) {
    console.log("Welcome to ABC Online Shopping");
    let mainItems = await inquirer.prompt([
        {
            name: "item",
            message: "Select any one Category:",
            type: "list",
            choices: ["Men's Wear", "Women's Wear", "Kids' Wear", "Exit"],
        }
    ]);
    // men's wear:
    if (mainItems.item === "Men's Wear") {
        let mensWear = await inquirer.prompt([
            {
                name: "category1",
                message: "Select any one category:",
                type: "list",
                choices: ["Clothing", "Shoes", "Perfumes", "Watches"]
            }
        ]);
        if (mensWear.category1 === "Clothing") {
            let clothes = await inquirer.prompt([
                {
                    name: "outfit",
                    message: "Select any one",
                    type: "list",
                    choices: ["Shalwar Suit", "Three Piece", "Two Piece", "Sherwani"],
                }
            ]);
            console.log("You selected:", clothes.outfit);
            if (clothes.outfit === "Shalwar Suit") {
                console.log("Price:", 2000);
            }
            if (clothes.outfit === "Three Piece") {
                console.log("Price:", 10000);
            }
            if (clothes.outfit === "Two Piece") {
                console.log("Price:", 8000);
            }
            if (clothes.outfit === "Sherwani") {
                console.log("Price:", 15000);
            }
        }
        //footWear
        if (mensWear.category1 === "Shoes") {
            let shoesAns = await inquirer.prompt([
                {
                    name: "FootWear",
                    message: "Select any one",
                    type: "list",
                    choices: ["Slipper", "Sneakers", "Flat Shoes", "Boot"],
                }
            ]);
            console.log("You selected:", shoesAns.FootWear);
            if (shoesAns.FootWear === "Slipper") {
                console.log("Price:", 1000);
            }
            if (shoesAns.FootWear === "Sneakers") {
                console.log("Price:", 10000);
            }
            if (shoesAns.FootWear === "Flat Shoes") {
                console.log("Price:", 5000);
            }
            if (shoesAns.FootWear === "Boot") {
                console.log("Price:", 10000);
            }
        }
        if (mensWear.category1 === "Perfumes") {
            let perfumeAns = await inquirer.prompt([
                {
                    name: "aroma",
                    message: "Select any one",
                    type: "list",
                    choices: ["Chanel", "Gucci", "Calivin & Kelien", "Yardlay"],
                }
            ]);
            console.log("You selected:", perfumeAns.aroma);
            if (perfumeAns.aroma === "Chanel") {
                console.log("Price:", 10000);
            }
            if (perfumeAns.aroma === "Gucci") {
                console.log("Price:", 15000);
            }
            if (perfumeAns.aroma === "Calivin & Kelien") {
                console.log("Price:", 13000);
            }
            if (perfumeAns.aroma === "Yardlay") {
                console.log("Price:", 5000);
            }
        }
        if (mensWear.category1 === "Watches") {
            let watchAns = await inquirer.prompt([
                {
                    name: "handWear",
                    message: "Select any one",
                    type: "list",
                    choices: ["Van Cleef & Arpels", "Piaget", "Cartier", "Harry Winston"],
                }
            ]);
            console.log("You selected:", watchAns.handWear);
            if (watchAns.handWear === "Van Cleef & Arpels") {
                console.log("Price:", 5000);
            }
            if (watchAns.handWear === "Piaget") {
                console.log("Price:", 8000);
            }
            if (watchAns.handWear === "Cartier") {
                console.log("Price:", 10000);
            }
            if (watchAns.handWear === "Harry Winston") {
                console.log("Price:", 15000);
            }
        }
    }
    // Women's wear
    else if (mainItems.item === "Women's Wear") {
        let womensWear = await inquirer.prompt([
            {
                name: "category2",
                message: "Select any one category:",
                type: "list",
                choices: ["Clothing", "Shoes", "Perfumes", "Watches", "Cosmetics", "Jewellery"]
            }
        ]);
        if (womensWear.category2 === "Clothing") {
            let clothes1 = await inquirer.prompt([
                {
                    name: "outfit1",
                    message: "Select any one",
                    type: "list",
                    choices: ["Shalwar Suit", "Three Piece", "Two Piece", "Frocks"],
                }
            ]);
            console.log("You selected:", clothes1.outfit1);
            if (clothes1.outfit1 === "Shalwar Suit") {
                console.log("Price:", 3000);
            }
            if (clothes1.outfit1 === "Three Piece") {
                console.log("Price:", 4000);
            }
            if (clothes1.outfit1 === "Two Piece") {
                console.log("Price:", 2500);
            }
            if (clothes1.outfit1 === "Frocks") {
                console.log("Price:", 8000);
            }
        }
        if (womensWear.category2 === "Shoes") {
            let shoesAns1 = await inquirer.prompt([
                {
                    name: "FootWear1",
                    message: "Select any one",
                    type: "list",
                    choices: ["Slipper", "Sneakers", "Flat Shoes", "Boot"],
                }
            ]);
            console.log("You selected:", shoesAns1.FootWear1);
            if (shoesAns1.FootWear1 === "Slipper") {
                console.log("Price:", 2500);
            }
            if (shoesAns1.FootWear1 === "Sneakers") {
                console.log("Price:", 10000);
            }
            if (shoesAns1.FootWear1 === "Flat Shoes") {
                console.log("Price:", 8000);
            }
            if (shoesAns1.FootWear1 === "Boot") {
                console.log("Price:", 15000);
            }
        }
        if (womensWear.category2 === "Perfumes") {
            let perfumeAns1 = await inquirer.prompt([
                {
                    name: "aroma1",
                    message: "Select any one",
                    type: "list",
                    choices: ["Chanel", "Gucci", "Calivin & Kelien", "Yardlay"],
                }
            ]);
            console.log("You selected:", perfumeAns1.aroma1);
            if (perfumeAns1.aroma1 === "Chanel") {
                console.log("Price:", 8000);
            }
            if (perfumeAns1.aroma1 === "Gucci") {
                console.log("Price:", 15000);
            }
            if (perfumeAns1.aroma1 === "Calivin & Kelien") {
                console.log("Price:", 13000);
            }
            if (perfumeAns1.aroma1 === "Yardlay") {
                console.log("Price:", 5000);
            }
        }
        if (womensWear.category2 === "Watches") {
            let watchAns1 = await inquirer.prompt([
                {
                    name: "handWear1",
                    message: "Select any one",
                    type: "list",
                    choices: ["Van Cleef & Arpels", "Piaget", "Cartier", "Harry Winston"],
                }
            ]);
            console.log("You selected:", watchAns1.handWear1);
            if (watchAns1.handWear1 === "Van Cleef & Arpels") {
                console.log("Price:", 8000);
            }
            if (watchAns1.handWear1 === "Piaget") {
                console.log("Price:", 12000);
            }
            if (watchAns1.handWear1 === "Cartier") {
                console.log("Price:", 5000);
            }
            if (watchAns1.handWear1 === "Harry Winston") {
                console.log("Price:", 15000);
            }
        }
        if (womensWear.category2 === "Cosmetics") {
            let cosmeticAns = await inquirer.prompt([
                {
                    name: "skincare",
                    message: "Select any one",
                    type: "list",
                    choices: ["Lip Stick", "Eye Shadow", "Facial Serum", "Mascara"],
                }
            ]);
            console.log("You selected:", cosmeticAns.skincare);
            if (cosmeticAns.skincare === "Lip Stick") {
                console.log("Price:", 1500);
            }
            if (cosmeticAns.skincare === "Eye Shadow") {
                console.log("Price:", 5000);
            }
            if (cosmeticAns.skincare === "Facial Serum") {
                console.log("Price:", 3000);
            }
            if (cosmeticAns.skincare === "Mascara") {
                console.log("Price:", 2000);
            }
        }
        if (womensWear.category2 === "Jewellery") {
            let jewelleryAns = await inquirer.prompt([
                {
                    name: "jewellery",
                    message: "Select any one",
                    type: "list",
                    choices: ["Neck Lace", "Ear Rings", "Rings", "Bangles"],
                }
            ]);
            console.log("You selected:", jewelleryAns.jewellery);
            if (jewelleryAns.jewellery === "Neck Lace") {
                console.log("Price:", 2000);
            }
            if (jewelleryAns.jewellery === "Ear Rings") {
                console.log("Price:", 500);
            }
            if (jewelleryAns.jewellery === "Rings") {
                console.log("Price:", 300);
            }
            if (jewelleryAns.jewellery === "Bangles") {
                console.log("Price:", 1000);
            }
        }
    }
    // Kids wear
    else if (mainItems.item === "Kids' Wear") {
        let kidsWear = await inquirer.prompt([
            {
                name: "category3",
                message: "Select any one category:",
                type: "list",
                choices: ["Clothing", "Shoes", "Toys"]
            }
        ]);
        console.log("You selected:", kidsWear.category3);
        if (kidsWear.category3 === "Clothing") {
            let clothes2 = await inquirer.prompt([
                {
                    name: "outfit2",
                    message: "Select any one",
                    type: "list",
                    choices: ["Shalwar Suit", "Three Piece", "Two Piece", "Frocks"],
                }
            ]);
            console.log("you selected:", clothes2.outfit2);
            if (clothes2.outfit2 === "Shalwar Suit") {
                console.log("Price:", 2000);
            }
            if (clothes2.outfit2 === "Three Piece") {
                console.log("Price:", 7000);
            }
            if (clothes2.outfit2 === "Two Piece") {
                console.log("Price:", 5000);
            }
            if (clothes2.outfit2 === "Frocks") {
                console.log("Price:", 6000);
            }
        }
        if (kidsWear.category3 === "Shoes") {
            let shoesAns2 = await inquirer.prompt([
                {
                    name: "FootWear2",
                    message: "Select any one",
                    type: "list",
                    choices: ["Slipper", "Sneakers", "Flat Shoes", "Boot"],
                }
            ]);
            console.log("You selected:", shoesAns2.FootWear2);
            if (shoesAns2.FootWear2 === "Slipper") {
                console.log("Price:", 1000);
            }
            if (shoesAns2.FootWear2 === "Sneakers") {
                console.log("Price:", 7000);
            }
            if (shoesAns2.FootWear2 === "Flat Shoes") {
                console.log("Price:", 5000);
            }
            if (shoesAns2.FootWear2 === "Boot") {
                console.log("Price:", 8000);
            }
        }
        if (kidsWear.category3 === "Toys") {
            let toyAns1 = await inquirer.prompt([
                {
                    name: "toys",
                    message: "Select any one",
                    type: "list",
                    choices: ["Animals packet", "RC Car", "Train", "Truck"],
                }
            ]);
            console.log("You selected:", toyAns1.toys);
            if (toyAns1.toys === "Animals packet") {
                console.log("Price:", 2500);
            }
            if (toyAns1.toys === "RC Car") {
                console.log("Price:", 4000);
            }
            if (toyAns1.toys === "Train") {
                console.log("Price:", 5000);
            }
            if (toyAns1.toys === "Truck") {
                console.log("Price:", 3500);
            }
        }
    }
    else if (mainItems.item === "Exit") {
        console.log("Thank you for shopping");
        break;
    }
}
;
