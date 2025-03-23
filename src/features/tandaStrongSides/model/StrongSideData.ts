import { ProfessionData } from "./types/strongSidesTypes";
import Frontend from "../../../../public/tanda/StrongSides/frontend.png";
import Backend from "../../../../public/tanda/StrongSides/backend.png";
import Design from "../../../../public/tanda/StrongSides/UI-UX-Design.png";
import Project from "../../../../public/tanda/StrongSides/projectManager.png";
import Product from "../../../../public/tanda/StrongSides/productManager.png";
import Database from "../../../../public/tanda/StrongSides/database.png";

export const skillToProfessions: Record<string, ProfessionData> = {
  "Креативность и визуальное мышление": {
    testLink: "/frontend-test",

    professions: ["Frontend"],
    groups: ["(Пи)"],
    image: Frontend,
    backgroundColor: "bg-[#8dddce]",
    reason:
      "Креативное и визуальное мышление играет важную роль в разработке интерфейсов, поскольку оно помогает создавать эстетически привлекательные и интуитивно понятные интерфейсы, которые привлекают пользователей. Обладая этим навыком, вы способны генерировать идеи по улучшению визуального оформления и взаимодействия на сайте, делая его удобным и легким для понимания.",
    description:
      "Frontend-разработчик создает визуальную часть веб-сайта, делая его удобным и привлекательным для пользователей.",
  },
  "Технические навыки и программирование": {
    testLink: "/backend-test",
    professions: ["Backend"],
    groups: ["(ПОВТ)"],
    image: Backend,
    backgroundColor: "bg-[#e3f1f8]",

    reason:
      "Технические навыки и опыт в программировании важны для создания серверной части веб-приложений, что обеспечивает их надежность, безопасность и высокую производительность. Владение этими навыками позволяет вам писать код, который эффективно обрабатывает данные и соединяется с базами данных, обеспечивая работу приложения без перебоев.",
    description:
      "Backend-разработчик отвечает за логику и работу серверной части приложения, управляет базами данных и интеграцией с фронтендом.",
  },
  "Эмпатия и понимание пользователей": {
    testLink: "/graphic-test",
    professions: ["UX/UI дизайнер"],
    groups: ["(ДПО)"],
    image: Design,
    backgroundColor: "bg-[#98eff7]",

    reason:
      "Эмпатия и способность понимать потребности пользователей помогают создавать интерфейсы, которые действительно удобны и приятны для использования. Обладая этим навыком, вы можете лучше предсказать, как пользователи взаимодействуют с интерфейсом, делая дизайн не только красивым, но и функциональным, что повышает их удовлетворенность.",
    description:
      "UX/UI дизайнер разрабатывает интерфейсы, которые удовлетворяют потребности пользователей, улучшая их взаимодействие с продуктом.",
  },
  "Планирование и организация": {
    testLink: "/project-test",

    professions: ["Проектный менеджер"],
    groups: ["Группа управления проектами"],
    image: Project,
    backgroundColor: "bg-[#bce1e1]",

    reason:
      "Навыки планирования и организации необходимы для успешного управления проектами, так как они позволяют эффективно распределять ресурсы и координировать действия команды. С этими навыками вы можете устанавливать четкие цели, составлять планы и контролировать их выполнение, что помогает достигать результатов в срок и с минимальными рисками.",
    description:
      "Проектный менеджер координирует работу команды, устанавливает сроки и следит за выполнением задач.",
  },
  "Инициативность и самостоятельность": {
    testLink: "/product-test",

    professions: ["Продуктовый менеджер"],
    groups: ["Группа менеджмента и маркетинга"],
    image: Product,
    backgroundColor: "bg-[#f7e1b3]",

    reason:
      "Инициативность и самостоятельность важны для продакт-менеджера, так как они помогают развивать продукт на всех этапах его жизненного цикла. Эти качества позволяют вам уверенно принимать решения, быстро адаптироваться к изменениям и внедрять новые идеи, что способствует успешному запуску и росту продукта.",
    description:
      "Продуктовый менеджер отвечает за разработку и продвижение продукта, оценивая его потенциал и взаимодействуя с командой.",
  },
  "Аналитическое мышление и работа с данными": {
    testLink: "/database-test",

    professions: ["Базы данных"],
    groups: ["Группа аналитики и работы с данными"],
    image: Database,
    backgroundColor: "bg-[#5ce4f4]",

    reason:
      "Аналитическое мышление и навыки работы с данными необходимы для успешного анализа и управления большими объемами информации. Эти навыки позволяют находить закономерности, выявлять тренды и принимать обоснованные решения на основе данных, что способствует надежности и эффективности систем хранения данных.",
    description:
      "Специалист по базам данных работает с хранением и управлением данными, обеспечивая их доступность и безопасность.",
  },
};
