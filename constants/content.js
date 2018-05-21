/* eslint-disable */ import { IMAGES_URL } from '~/constants/paths';
import { EN, PL } from '~/constants/supportedLanguages';

const ABOUT_US_URL = `${IMAGES_URL}/about-us`;

export default {
  [PL]: {
    navigation: {
      aboutUs: { label: 'o kwartecie', value: 'about-us' },
      ourOffer: { label: 'oferta', value: 'offer' },
      cooperation: { label: 'współpraca', value: 'cooperation' },
      multimedia: { label: 'multimedia', value: 'multimedia' },
      contact: { label: 'kontakt', value: 'contact' },
    },
    intro: { subtitle: 'kwartet smyczkowy' },
    aboutUs: {
      description: {
        title: 'o kwartecie',
        subtitle:
          'Jesteśmy absolwentkami najlepszych Akademii Muzycznych w kraju, kształconymi u wybitnych profesorów.',
        body:
          'Każda może się poszczycić nagrodami w konkursach solowych i kameralnych oraz kursami mistrzowskimi u najlepszych pedagogów z Polski i świata.Co równie ważne, od lat wykonujemy swój zawód w praktyce, współpracując z czołowymi orkiestrami i wykonawcami przy projektach koncertowych i nagraniach, niejednokrotnie grając na scenie z gwiazdami polskiej muzyki rozrywkowej, Edytą Górniak, Sebastianem Karpielem - Bułecką, Kubą Badachem, Justyną Steczkowską, Kayah i innymi.',
      },
      people: {
        1: {
          imageUrl: `${ABOUT_US_URL}/ola.jpg`,
          title: 'Ola',
          subtitle: 'skrzypce',
          body:
            'Całe życie gra pierwsze skrzypce. Związana na stałe z Orkiestrą Akademii Beethovenowskiej, z pasją kształci też pokolenia młodych skrzypków. W wolnych chwilach z przyjemnością oddaje się dobrej lekturze oraz filmowi.',
        },
        2: {
          imageUrl: `${ABOUT_US_URL}/ania.jpg`,
          title: 'Ania',
          subtitle: 'skrzypce',
          body:
            'Gdyby nie skrzypce zostałaby prawdopodobnie sportsmenką. Na nasze szczęście wybrała muzykę, choć sport kocha do dziś. Skrzypaczka w Orkiestrze Akademii Beethovenowskiej, nauczyciel gry na skrzypcach, również metodą Suzuki.',
        },
        3: {
          imageUrl: `${ABOUT_US_URL}/justyna.jpg`,
          title: 'Justyna',
          subtitle: 'altówka',
          body:
            'Ciągle w ruchu i nieraz cieżko za nią nadążyć. Współpracuje z wieloma krakowskimi orkiestrami, jest też stażystką drugiej edycji Akademii Baltic Neopolis Orchestra.Lubi stawiać sobie wyzwania. Dyplomowana altowiolistka, a wkrótce także skrzypaczka.',
        },
        4: {
          imageUrl: `${ABOUT_US_URL}/dominika.jpg`,
          title: 'Dominika',
          subtitle: 'wiolonczela',
          body:
            'Nasza wiolonczelistka. Perfekcjonistka w każdym calu, zawsze daje impuls do działania i jest solidną bazą zespołu.Jej pasją jest muzyka kameralna, na której polu zdobywa liczne laury.W wolnym czasie uwielbia chodzić po górach.Od niedawna krakowianka.',
        },
      },
    },
    ourOffer: {
      description: {
        title: 'Oferta',
        subtitle: 'Eventy, śluby, bankiety...',
        body: {
          paragraph1:
            'Oprawa muzyczna ślubu, przyjęcia, bankietu czy spotkania firmowego to tylko część okoliczności, które możemy uświetnić swoimi umiejętnościami.Niezależnie od wydarzenia gwarantujemy, że każde wykonanie będzie niepowtarzalne i na długo pozostanie w pamięci i sercach.',
          paragraph2:
            'Klasycznie, czy rozrywkowo? Muzyka filmowa… a może jazzowe standardy? Decyzja należy do Państwa.Ze względu na duże doświadczenie z chęcią doradzimy w kwestiach repertuarowych w zależności od okazji.Jeśli jednak mają Państwo konkretne pomysły czy marzenia związane z oprawą muzyczną swojej uroczystości lub wydarzenia - jesteśmy otwarte na propozycje.Po inspiracje zapraszamy do zakładki Multimedia.',
        },
      },
    },
    cooperation: {
      description: {
        title: 'Współpraca',
        body: {
          paragraph1:
            'Jako zespół jesteśmy ukierunkowane na szerokie działanie, również w ramach projektów autorskich, wydarzeń koncertowych i kulturalnych współtworzonych z instytucjami i artystami.',
          paragraph2: 'Zapraszamy do kontaktu!',
        },
      },
    },
    multimedia: {
      videos: [
        {
          title: 'Różni wykonawcy',
          subtitle: 'Kompilacja utworów',
          videoUrl:
            'https://www.youtube.com/embed/mLfiCVBl-Z8?rel=0&amp;showinfo=0',
        },
        {
          title: 'Aerosmith',
          subtitle: "I don't wanna miss a thing",
          videoUrl:
            'https://www.youtube.com/embed/ghxoAA99mcw?rel=0&amp;showinfo=0',
        },
      ],
    },
    contact: {
      description: {
        title: 'kontakt',
      },
      contact1: {
        name: 'Dominika Szczypka',
        phone: '+48 603 540 013',
      },
      contact2: {
        name: 'Justyna Poprawska',
        phone: '+48 501 303 089',
      },
      form: {
        email: 'Email *',
        name: 'Imię',
        content: 'Treść wiadomości *',
      },
    },
  },
  [EN]: {
    navigation: {
      aboutUs: { label: 'about us', value: 'about-us' },
      ourOffer: { label: 'our offer', value: 'offer' },
      cooperation: { label: 'cooperation', value: 'cooperation' },
      multimedia: { label: 'multimedia', value: 'multimedia' },
      contact: { label: 'contact', value: 'contact' },
    },
    intro: { subtitle: 'string quartet' },
    aboutUs: {
      description: {
        title: 'about us',
        subtitle:
          'The Members of the Quartet  are graduates of the best Music Academies in the country, educated by eminent professors.',
        body:
          'Each of us can proudly demonstrate prizes in solo and chamber competitions as well as master courses from the best teachers from Poland and the world. What is equally important, we have been practicing our profession for years, working with leading orchestras and performers on concert projects and recordings, and often playing on stage with stars of Polish pop music scene, for example with: Edyta Górniak, Sebastian Karpiel-Bułecka, Kuba Badakh, Justyna Steczkowska, Kayah and others.',
      },
      people: {
        1: {
          imageUrl: `${ABOUT_US_URL}/ola.jpg`,
          title: 'Ola',
          subtitle: 'violin',
          body:
            'She has been taking the lead all her life. Permanently associated with the Beethoven Academy Orchestra, she also passionately educates generations of young violinists. In her free time, she likes to bury herself in a good book or watch an interesting movie.',
        },
        2: {
          imageUrl: `${ABOUT_US_URL}/ania.jpg`,
          title: 'Ania',
          subtitle: 'violin',
          body:
            'If it wasn’t for the love for violin she would probably be a sportswoman. Luckily for us she chose music but she enjoys sport to this day. She is a violinist in the Beethoven Academy Orchestra, a violin teacher, who also uses the Suzuki method.',
        },
        3: {
          imageUrl: `${ABOUT_US_URL}/justyna.jpg`,
          title: 'Justyna',
          subtitle: 'viola',
          body:
            'Constantly on the move, sometimes it’s difficult to keep up with her. She collaborates with many Krakow orchestras and she is a trainee of the second edition of the Baltic Neopolis Orchestra. She also likes to challenge herself. A certified violist, and soon also a violinist.',
        },
        4: {
          imageUrl: `${ABOUT_US_URL}/dominika.jpg`,
          title: 'Dominika',
          subtitle: 'cello',
          body:
            'Our cellist, perfectionist in every way. She always inspires us to take on new challenges and at the same time she is an anchor for our team. She collects numerous prizes for the chamber music, which is her passion. Since recently, a Cracovian, she also enjoys long hikes in the mountains.',
        },
      },
    },
    ourOffer: {
      description: {
        title: 'Our offer',
        subtitle: 'Events, weddings, banquets...',
        body: {
          paragraph1:
            'Music setting for a wedding, party, banquet or company meeting are just some of the events that we can enhance with our skills. Regardless of the event, we guarantee that each performance will be unique and will remain in the memory and hearts of your guests for a long time.',
          paragraph2:
            'Classic or pop? Film music ... or maybe jazz standards? The decision is up to you. Thanks to our extensive experience, we are well equipped to advise you on repertoire issues depending on the occasion. Of course if you have specific ideas or wishes regarding the musical setting of your celebration or event - we are open to any suggestions. For inspiration, please visit the Multimedia section.',
        },
      },
    },
    cooperation: {
      description: {
        title: 'Cooperation',
        body: {
          paragraph1:
            'As a team, we are focused on a wide range of activities, also as part of original projects, concert and cultural events co-created with institutions and artists.',
          paragraph2: 'Feel free to contact us!',
        },
      },
    },
    multimedia: {
      videos: [
        {
          title: 'Various artists',
          subtitle: 'Songs compilation',
          videoUrl:
            'https://www.youtube.com/embed/mLfiCVBl-Z8?rel=0&amp;showinfo=0',
        },
        {
          title: 'Aerosmith',
          subtitle: "I don't wanna miss a thing",
          videoUrl:
            'https://www.youtube.com/embed/ghxoAA99mcw?rel=0&amp;showinfo=0',
        },
      ],
    },
    contact: {
      description: {
        title: 'contact',
      },
      contact1: {
        name: 'Dominika Szczypka',
        phone: '+48 603 540 013',
      },
      contact2: {
        name: 'Justyna Poprawska',
        phone: '+48 501 303 089',
      },
      form: {
        email: 'Email *',
        name: 'Name',
        content: 'Message *',
      },
    },
  },
};
