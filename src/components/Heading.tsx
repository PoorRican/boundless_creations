import { NavLink } from "react-router-dom";

const Heading = () => {
  const routes = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Projects',
      path: '/projects',
    },
  ];

    return (
      <div className="min-h-full bg-indigo-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">

            {/* title */}
            <div className={"mt-8"}>
              <div className={"select-none leading-none font-mono text-sm md:leading-none md:text-lg " +
                "subpixel-antialiased text-yellow-400 whitespace-pre overflow-hidden"}>
                <p>{`  ┳┏━┓┓━┓┳ ┓┳━┓  ┳━┓o┏━┓┳ ┓┳━┓┳━┓┏━┓┳━┓`}</p>
                <p>{`┏ ┃┃ ┃┗━┓┃ ┃┣━   ┣━ ┃┃ ┳┃ ┃┣━ ┃┳┛┃ ┃┃━┫`}</p>
                <p>{`┗━┇┛━┛━━┛┇━┛┻━┛  ┇  ┇┇━┛┇━┛┻━┛┇┗┛┛━┛┛ ┇`}</p>
              </div>
            </div>

            <span className={"mt-2 md:mt-4 text-cyan-300"}>
              Full Stack AI Engineer
            </span>

            {/* links */}
            <div>
              <div className="my-4 flex items-baseline space-x-4">
                {routes.map(({path, name}) => {
                  return (
                    <NavLink
                      key={name}
                      to={path}
                      className={
                        ({isActive}) => {
                          const style = " px-3 py-2 text-sm font-medium"
                          return isActive ? 'underline underline-offset-2 text-white' + style
                            : 'text-gray-300 hover:bg-indigo-700 hover:text-white' + style
                        }
                      }
                    >
                      {name}
                    </NavLink>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
}

export default Heading;