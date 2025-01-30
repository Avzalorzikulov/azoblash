import { NavLink } from "react-router-dom";

export default function Handout() {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex space-x-4 mb-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-gray-700 hover:text-blue-500"
              }
              to={"/shop"}
            >
              Product Description
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-gray-700 hover:text-blue-500"
              }
              to={"/shop"}
            >
              Reviews (19)
            </NavLink>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam fringilla augue nec est tristique auctor. Donec non est at
              libero vulputate rutrum. Morbi ornare lectus quis justo gravida
              semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit
              id nulla.
            </p>
            <p className="text-gray-700">
              Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
              feugiat sem, quis fermentum turpis eros eget velit. Donec ac
              tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
              eget sagittis vulputate, sapien libero hendrerit est, sed commodo
              augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
              nisi posuere nisl, in accumsan elit odio quis mi. Cras neque
              metus, consequat et blandit et, luctus a nunc. Etiam gravida
              vehicula tellus, in imperdiet ligula euismod eget. The ceramic
              cylinder planters come with a wooden stand to help elevate your
              plants off the ground.
            </p>
            <div className="space-y-2">
              <h2 className="font-semibold text-lg">Living Room:</h2>
              <p className="text-gray-700">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold text-lg">Dining Room:</h2>
              <p className="text-gray-700">
                The benefits of houseplants are endless. In addition to cleaning
                the air of harmful toxins, they can help to improve your mood,
                reduce stress and provide you with better sleep. Fill every room
                of your home with houseplants and their restorative qualities
                will improve your life.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold text-lg">Office:</h2>
              <p className="text-gray-700">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
