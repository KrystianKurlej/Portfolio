import Link from "next/link";
import Nav from "../components/Nav";

const PrivacyPolicy = () => {
  return (
    <>
    <Nav />
    <header className="max-w-[700px] w-full px-2.5 mx-auto mt-12 mb-6">
      <h1 className="text-4xl mb-4 sm:mb-0">Polityka prywatności</h1>
      <p className="mt-6 font-light text-neutral-200 leading-6">Niniejsza Polityka Prywatności zawiera zasady przechowywania i zapisywania danych na Urządzeniach Użytkowników, przez Serwis funkcjonujący pod adresem <Link className="text-white font-regular underline" href='https://portfolio-eta-nine-50.vercel.app/'>https://portfolio-eta-nine-50.vercel.app/</Link>. Strona Portfolio Krystiana Kurlej - gromadzone dane mają na celu udostępnianie prac przez Administratora Serwisu poprzez drogę elektroniczną.</p>
    </header>
    <main className="max-w-[700px] w-full px-2.5 py-5 mx-auto">
      <h4 className="mt-10 mb-4 text-2xl">1. Definicje</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">Serwis - strona internetowa portfolio dostępna pod adresem <Link className="text-white font-regular underline" href='https://portfolio-eta-nine-50.vercel.app/'>https://portfolio-eta-nine-50.vercel.app/</Link></li>
        <li className="mt-1">Administrator - Autor portfolio, który udostępnia swoje prace do wglądu za pośrednictwem Serwisu drogą elektroniczną i posiada możliwość przechowywania oraz wglądu do danych zapisywanych na Urządzeniach Użytkowników.</li>
        <li className="mt-1">Cookies - dane tekstowe, które są przechowywane w formie plików na Urządzeniach Użytkowników.</li>
        <li className="mt-1">Urządzenie - urządzenie elektroniczne posiadające oprogramowanie, które zezwala Użytkownikowi na dostęp i korzystanie z Serwisu.</li>
        <li className="mt-1">Użytkownik - osoba fizyczna wobec której świadczone są usługi Administratora za pośrednictwem Serwisu.</li>
        <li className="mt-1">Serwis zewnętrzny - serwis internetowy należące do usługodawców, usługobiorców bądź partnerów Administratora.</li>
      </ol>

      <h4 className="mt-10 mb-4 text-2xl">2. Rodzaje Cookies</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">Wewnętrzne - pliki cookies, które są zamieszczane i odczytywane przez system Serwisu na Urządzeniach Użytkowników.</li>
        <li className="mt-1">Zewnętrzne - pliki cookies, które są zamieszczane i odczytywane przez systemy Serwisów zewnętrznych na Urządzeniach Użytkowników.</li>
        <li className="mt-1">Trwałe - pliki cookies, które są zamieszczane i odczytywane przez system Serwisu lub systemy Serwisów zewnętrznych na Urządzeniach Użytkowników, do momentu, gdy zostaną usunięta w sposób ręczny. Trwałe Cookies nie są usuwane automatycznie wraz z zakończeniem sesji przeglądania, o ile Użytkownik nie dokonał konfiguracji swojego Urządzenia, wymuszając usuwanie plików Cookies po zakończeniu sesji przeglądania.</li>
        <li className="mt-1">Seryjne - pliki cookies, które są zamieszczane i odczytywane przez system Serwisu lub systemy Serwisów zewnętrznych na Urządzeniach Użytkowników w trakcie jednej sesji przeglądania. Po jej zakończeniu, Seryjne Cookies są usuwane z Urządzenia Użytkownika.</li>
      </ol>

      <h4 className="mt-10 mb-4 text-2xl">3. Bezpieczeństwo</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">Mechanizmy składowania i odczytu plików Cookies nie pobierają żadnych danych osobowych, ani poufnych informacji dostępnych na Urządzeniach Użytkowników. Nie jest możliwe przeniesie na Urządzenie wirusów, złośliwego oprogramowania oraz innych zagrożeń na Urządzenie elektroniczne Użytkownika.</li>
        <li className="mt-1">Pliki Cookies Wewnętrzne stosowane przez Administratora Serwisu są bezpieczne dla Urządzeń Użytkowników.</li>
        <li className="mt-1">Za Pliki Cookies Zewnętrzne, które pochodzą z Serwisów Zewnętrznych, Administrator nie ponosi odpowiedzialności.</li>
      </ol>

      <h4 className="mt-10 mb-4 text-2xl">4. Cele, do których Serwis wykorzystuje pliki cookies</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">Usprawnienie dostępu do Serwisu - w Plikach Cookies Administrator może przechowywać dane dotyczące preferencji oraz ustawień Serwisu dla poszczególnych Użytkowników. Dzięki temu jakość usług realizowanych przez Serwis mogą być wyższa, a Użytkownik może korzystać z Serwisu sprawniej, szybciej i łatwiej.</li>
        <li className="mt-1">Statystyki - Administrator oraz Serwisy zewnętrzne mogą korzystać z plików Cookies zbierając i dokonując przetworzenia danych statycznych, które pozwalają monitorować wskaźnik odwiedzin, rodzaj Urządzeń z jakich korzystają Użytkownicy oraz ich zachowania. Dzięki danym statystycznym Administrator może analizować i ulepszać jakość działania Serwisu.</li>
      </ol>

      <h4 className="mt-10 mb-4 text-2xl">5. Serwisy zewnętrzne</h4>
      <p className="font-light text-neutral-200 leading-6">Poniższe Serwisy Zewnętrzne, z którymi współpracuje Administrator mogą przechowywać Pliki Cookies na Urządzeniach Użytkownika:</p>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">Google Analytics</li>
        <li className="mt-1">Hotjar</li>
      </ol>

      <h4 className="mt-10 mb-4 text-2xl">6. Możliwości określania warunków przechowywania oraz uzyskiwania dostępu do plików cookies</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">Użytkownik może samodzielnie i w dowolnym momencie dokonać zmiany w ustawieniach dotyczących dostępu do danych Plików Cookies oraz ich zapisywania i usuwania.</li>
        <li className="mt-1">Użytkownik ma możliwość skasowania wszystkich zapisywanych do tej pory Plików Cookies ze swojego Urządzenia.</li>
        <li className="mt-1">Informacje na temat możliwości wyłączenia gromadzenia Plików Cookies można znaleźć pod adresem: <Link target="_blank" className="text-white font-regular underline" href='https://jakwylaczyccookie.pl/jak-wylaczyc-pliki-cookies/'>https://jakwylaczyccookie.pl/jak-wylaczyc-pliki-cookies/</Link></li>
      </ol>

      <h4 className="mt-10 mb-4 text-2xl">7. Wymagania serwisu</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">Użytkownik, który ograniczy zapis oraz dostęp do Plików Cookies na swoim Urządzeniu może spowodować, że niektóre z funkcji Serwisu nie będą działały w pełni poprawnie.</li>
        <li className="mt-1">Za nieprawidłowości w działaniu funkcji Serwisu spowodowanych ograniczeniem zapisu i dostępu do Plików Cookies, Administrator nie ponosi odpowiedzialności.</li>
      </ol>

      <h4 className="mt-10 mb-4 text-2xl">8. Zmiany w polityce prywatności</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">Administrator zastrzega sobie prawo do wprowadzenia zmian w Polityce Prywatności bez informowania o nich Użytkowników.</li>
        <li className="mt-1">Wszelkie zmiany w Polityce Prywatności zostaną opublikowane na tej stronie.</li>
        <li className="mt-1">Zmiany w Polityce Prywatności obowiązują od dnia ich publikacji.</li>
      </ol>
    </main>
    <div className="max-w-[700px] w-full px-2.5 mx-auto my-12">
      <Link href='/' title="Portfolio" className="text-4xl flex gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
          <path d="M12.1332 14.2333L23.0666 14.2333C23.4443 14.2333 23.7612 14.3613 24.0172 14.6173C24.2732 14.8733 24.4008 15.1898 24.3999 15.5667C24.3999 15.9444 24.2719 16.2613 24.0159 16.5173C23.7599 16.7733 23.4435 16.9009 23.0666 16.9L12.1332 16.9L15.9999 20.7667C16.2443 21.0111 16.3666 21.3222 16.3666 21.7C16.3666 22.0778 16.2443 22.3889 15.9999 22.6333C15.7555 22.8778 15.4443 23 15.0666 23C14.6888 23 14.3777 22.8778 14.1332 22.6333L7.9999 16.5C7.73323 16.2333 7.5999 15.9222 7.5999 15.5667C7.5999 15.2111 7.73323 14.9 7.9999 14.6333L14.1332 8.5C14.3777 8.25555 14.6888 8.13333 15.0666 8.13333C15.4443 8.13333 15.7555 8.25555 15.9999 8.5C16.2443 8.74444 16.3666 9.05555 16.3666 9.43333C16.3666 9.81111 16.2443 10.1222 15.9999 10.3667L12.1332 14.2333Z" fill="white"/>
      </svg>
      Wróć do przeglądania portfolio
      </Link>
    </div>
    </>
  );
};

export default PrivacyPolicy;
