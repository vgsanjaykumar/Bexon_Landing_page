import { FaLightbulb, FaTrophy, FaUsers, FaHeadset, FaMousePointer } from "react-icons/fa";

const features = [
  {
    icon: <FaLightbulb size={40} className="text-teal-600" />,
    title: "Innovative Solutions",
    description:
      "We stay ahead of the leveraging cutting-edge technologies and strategies to keep.",
  },
  {
    icon: <FaTrophy size={40} className="text-teal-600" />,
    title: "Award-Winning",
    description:
      "Recognized by industry leaders, our award-winning team has a proven record.",
    highlighted: true,
  },
  {
    icon: <FaUsers size={40} className="text-teal-600" />,
    title: "Expert Team",
    description:
      "Our team is always available to address your concerns, providing quick and solution.",
  },
  {
    icon: <FaHeadset size={40} className="text-teal-600" />,
    title: "Dedicated Support",
    description:
      "Our team is always available to address your concerns, providing quick and effective.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <p className="text-teal-600 font-medium uppercase">Choose the Best</p>
        <h2 className="text-4xl font-medium text-gray-900 leading-tight mt-2">
          Empowering Business <br /> with Expertise.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md transition ${
              feature.highlighted
                ? "bg-teal-700 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm mb-4">{feature.description}</p>
            <a
              href="#"
              className={`font-semibold flex items-center space-x-2 ${
                feature.highlighted ? "text-white" : "text-teal-700"
              }`}
            >
              <span>Read More</span>
              <span className="text-lg"><FaMousePointer/></span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
