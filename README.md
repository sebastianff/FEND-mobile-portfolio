## Website Performance Optimization portfolio project

In the main.js I have simplified the resize pizzas function by deleting all the sufficient calculations and creating allThePizzas variable which was taken out of the loop. This way the changePizzaSizes function was creating a new size variable on each click and directly changing the pizza sizes. This took down the speed of changing the pizza sizes to less than a milisecond.

The second thing I did was creating the scrollPos variable in the updatePositions function to avoid async layout.

After that I changed the number of the pizzas loated in the same function. I took the number to 20 which didn't change the look of the page but improved the frame generation speed significantly.

I also resized the pizza image to around 11kb.

In the css i set the .mover class in the style.css file to be will-change transform.

I have also used gulp to minimize the css,js and the photos for the main index.hmtl page.