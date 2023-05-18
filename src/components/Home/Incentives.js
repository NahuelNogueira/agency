const incentives = [
  {
    name: "Fast solutions",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "Our teams specialize in providing quick solutions to your company's problems.",
  },
  {
    name: "High Quality",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "Every team's member are experts on their field to grant excellent products.",
  },
  {
    name: "Escalable",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "Every one of our final products are escalable so you don't have to worry about that.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-white ">
      <div className="mx-auto py-24 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              We built our business on customer service
            </h2>
            <p className="mt-4 text-gray-500">
              Focused on bringing the solutions to your need, our expert teams develop excellent products and grant maintance to your site.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
