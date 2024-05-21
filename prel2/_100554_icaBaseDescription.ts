/// <mls shortName="icaBaseDescription" project="100554" enhancement="_blank" />

import * as icaBase from "./_100554_icaBase";

const message_pt = {
  dForms: "Componentes para cria��o e manipula��o de formul�rios, permitindo a entrada de dados pelo usu�rio de forma estruturada.",
  dNavigation: "Componentes projetados para facilitar a movimenta��o do usu�rio pela aplica��o, englobando tanto a navega��o entre diferentes p�ginas quanto a manipula��o de conte�do dentro de uma mesma p�gina.",
  dApresentation: "Componentes projetados para apresentar conte�do est�tico em diferentes formatos, como texto, imagens, v�deos, sons e gr�ficos.",
  dLayout: "Define a estrutura e a organiza��o visual dos elementos na interface do usu�rio. Engloba componentes e t�cnicas para arranjar o conte�do de forma l�gica e esteticamente agrad�vel, melhorando a experi�ncia do usu�rio ao navegar e interagir com a aplica��o.",
  dBlocks: "Agrupa componentes complexos que encapsulam funcionalidades espec�ficas e s�o compostos por m�ltiplos elementos. Esses blocos s�o projetados para oferecer recursos interativos avan�ados, como calend�rios, visualizadores de documentos e sistemas de agendamento, enriquecendo a experi�ncia do usu�rio com funcionalidades integradas e personaliz�veis.",

  // definition sub group 1 (2 itens 'a / b')
  dFInput: "Campos de entrada para coleta de informa��es do usu�rio, incluindo texto, n�meros, datas, sele��es e mais.",
  dFRecords: "Visualizadores de registros para apresentar dados ao usu�rio em diferentes formatos como tabelas, listas, cart�es e mapas geogr�ficos.",
  dFTree: "Componentes para visualiza��o e edi��o de dados em estrutura hier�rquica, como �rvores de dados, breadcrumbs adaptados e mapas mentais.",
  dFSubmit: "Componentes focados na finaliza��o de intera��es do usu�rio com formul�rios. Inclui bot�es para submeter, cancelar ou limpar formul�rios, bem como mecanismos para enviar dados para sistemas externos. Essencial para facilitar a��es conclusivas dentro de formul�rios, garantindo uma interface clara e eficiente para coleta de dados e outras a��es relacionadas. Considera��es especiais para feedback ao usu�rio e quest�es de seguran�a e privacidade s�o fundamentais neste grupo.",

  dNLinks: "Conjunto de componentes focados na navega��o entre p�ginas ou recursos, seja dentro da pr�pria aplica��o ou para sites externos. Inclui menus, bot�es, links diretos e �ncoras para navega��o interna.",
  dNContent: "Componentes especializados na apresenta��o e intera��o com diferentes tipos de conte�do dentro de uma p�gina, como tabs, accordions e popups, permitindo uma experi�ncia de usu�rio mais din�mica e interativa.",

  dAText: "Componentes para apresenta��o de conte�do textual, incluindo textos simples, banners, cita��es e textos ricos.",
  dAImages: "Componentes para apresentar imagens, �cones, avatares, galerias, carross�is, sliders e mapas.",
  dAVideos: "Componentes para incorporar v�deos, apresentar v�deos imagem (como GIFs ou v�deos animados) e listas de reprodu��o de v�deo.",
  dASound: "Componentes para reprodu��o de sons, incluindo players de �udio, efeitos sonoros e players de podcast.",
  dACharts: "Componentes para exibir gr�ficos em 2D ou 3D, facilitando a visualiza��o de dados.",
  dAAnimations: "Anima��es para enriquecer a intera��o do usu�rio, incluindo carregamentos, cliques e anima��es JavaScript.",
  dAEmbeds: "Componentes para incorporar conte�dos de redes sociais, como posts e feeds.",
  dAMessages: "Componentes destinados a fornecer feedback ao usu�rio atrav�s de mensagens, alertas e notifica��es. Inclui desde toasts e snackbars, que oferecem feedback breve e direto, at� alertas modais e notifica��es mais persistentes. Ideal para informar os usu�rios sobre o resultado de a��es, avisos importantes, ou novas mensagens recebidas. Esses componentes s�o projetados para serem intuitivos e minimamente intrusivos, garantindo uma comunica��o eficaz sem prejudicar a experi�ncia do usu�rio.",

  dLFlow: "Componentes e t�cnicas focados na disposi��o sequencial ou estruturada do conte�do, como se��es, grupos, linhas, colunas e grades. Inclui abordagens adaptativas e responsivas para garantir uma apresenta��o �tima em diferentes dispositivos e tamanhos de tela.",
  dLGroup: "Ferramentas e componentes dedicados a agrupar elementos relacionados para destacar informa��es ou organizar o conte�do de forma coesa. Inclui tabelas para dados tabulares e cart�es para representa��es visuais compactas de informa��es.",

  dBView: "Subgrupo dedicado a componentes para visualiza��o de conte�do, como documentos PDF, planilhas, e outros formatos de arquivo. Permite aos usu�rios acessar e interagir com uma variedade de dados diretamente dentro da aplica��o.",
  dBPlugins: "Inclui componentes de terceiros integr�veis, oferecendo funcionalidades adicionais prontas para uso. Estende as capacidades da aplica��o com solu��es especializadas, como mapas, an�lises, e widgets de m�dia social.",
  dBProjects: "Agrupa componentes internos customizados, como p�ginas de pesquisa e visualiza��es de detalhes espec�ficos. Esses blocos s�o projetados para complementar a aplica��o com funcionalidades espec�ficas e vis�es detalhadas de dados ou processos.",

  // definition final group (3 itens 'a / b / c')
  dFINumber: "Permite ao usu�rio inserir valores num�ricos, com suporte a limites m�nimo e m�ximo.",
  dFIString: "Campo para texto livre, podendo configurar valida��es como tamanho m�ximo e express�es regulares.",
  dFIBoolean: "Componente para escolha bin�ria, como switches ou checkboxes, ideal para configura��es de sim/n�o.",
  dFIDate: "Seletor de datas, com op��es de configura��o para limitar per�odos.",
  dFITime: "Permite ao usu�rio selecionar um hor�rio, com suporte a diferentes formatos de hora.",
  dFIDateRange: "Componente para sele��o de intervalos de datas, �til para filtros de per�odos.",
  dFISelectOne: "Seletor para uma �nica op��o dentre v�rias, podendo ser apresentado como dropdown, combobox, etc.",
  dFIMultSelect: "Permite a sele��o de m�ltiplas op��es, ideal para filtros ou configura��es avan�adas.",
  dFIColor: "Seletor de cores, com suporte a diferentes formatos de cor (RGB, HEX, etc.).",
  dFIEditor: "Editor de texto rico, permitindo formata��o b�sica (negrito, it�lico) e inser��o de elementos como listas e tabelas.",
  dFIFeedBack: "Para rating, ou joinha (aprova��o ou n�o aprova��o), permitindo ao usu�rio expressar opini�es de forma simples.",
  dFIFile: "Para anexar um arquivo, com suporte a arrastar e soltar e visualiza��o de progresso de upload.",

  dFRTable: "Exibe dados em formato de tabela, com suporte a ordena��o e filtragem.",
  dFRList: "Lista de itens, customiz�vel para exibir informa��es resumidas ou detalhadas.",
  dFRTimeline: "Apresenta eventos ou registros em linha do tempo, facilitando a visualiza��o de sequ�ncias ou hist�ricos.",
  dFRCards: "Dados apresentados em cart�es, ideal para resumos visuais com imagens ou �cones.",
  dFRMap: "Exibe informa��es geogr�ficas em um mapa, suportando marcadores e regi�es personalizadas.",
  dFRPagination: "Tabela de dados com pagina��o, para gerenciar grandes conjuntos de dados sem sobrecarregar a interface.",
  dFRInfinity: "Tabela que carrega mais dados automaticamente conforme o usu�rio rola a p�gina, para uma navega��o fluida em grandes conjuntos de dados.",

  dFTView: "Estrutura hier�rquica de dados que permite expans�o e contra��o de n�s, �til para categorias ou estruturas organizacionais.",
  dFTBreadcrumbs: "Sequ�ncia hier�rquica de links que representam a navega��o ou localiza��o atual do usu�rio, aqui adaptada para edi��o de estruturas hier�rquicas.",
  dFTDropdown: "Dropdowns aninhados que permitem a sele��o em m�ltiplos n�veis de uma hierarquia.",
  dFTAccordions: "Acordions aninhados para organizar conte�do ou categorias em m�ltiplas camadas, facilitando a navega��o em estruturas complexas.",
  dFTTags: "Conjunto de tags ou palavras-chave que representam frequ�ncia ou import�ncia, permitindo edi��o e organiza��o din�mica.",
  dFTMap: "Mapa mental para organiza��o e visualiza��o de ideias ou conceitos em estrutura radial, facilitando a edi��o e expans�o de conceitos relacionados.",

  dFSSubmit: "Bot�o para submeter o formul�rio. Ao ser clicado, coleta e envia os dados do formul�rio para o servidor ou manipulador designado. Essencial para finalizar a entrada de dados pelo usu�rio.",
  dFSCancel: "Bot�o para cancelar a opera��o do formul�rio, permitindo ao usu�rio interromper sua a��o e, geralmente, voltar ao estado ou tela anterior. Ajuda a garantir uma navega��o segura sem submiss�o de dados.",
  dFSClear: "Bot�o para limpar todos os campos do formul�rio, removendo as entradas do usu�rio. �til em formul�rios longos ou complexos onde o rein�cio pode ser necess�rio.",
  dFSSend: "Mecanismo para enviar dados do formul�rio para um sistema ou site externo. Utilizado para integra��es com APIs de terceiros ou para coletar informa��es em diferentes plataformas. Deve garantir a seguran�a e a privacidade dos dados do usu�rio.",

  dNLMenus: "Menus que oferecem navega��o principal atrav�s da aplica��o ou para sites externos. Suportam estruturas hier�rquicas para organizar as op��es de navega��o.",
  dNLButtons: "Bot�es utilizados para a��es de navega��o, como submeter formul�rios ou redirecionar para outras p�ginas internas ou externas.",
  dNLLinks: "Links para navega��o direta entre p�ginas da aplica��o ou para recursos externos, com suporte a abertura em nova aba dependendo do contexto (target).",
  dNLBreadcrumbs: "Caminhos de navega��o hier�rquicos que indicam a localiza��o atual do usu�rio dentro da aplica��o e facilitam o retorno a n�veis anteriores.",
  dNLAnchors: "�ncoras que permitem a navega��o interna em uma p�gina, direcionando o usu�rio para se��es espec�ficas sem recarregar a p�gina.",

  dNCTab: "Abas que organizam conte�do relacionado em se��es separadas, permitindo a troca entre elas sem recarregar a p�gina.",
  dNCScenary: "Componentes que guiam o usu�rio atrav�s de cen�rios ou passos sequenciais dentro de uma mesma p�gina, ideal para tutoriais ou configura��es passo a passo.",
  dNCStepper: "Indicadores de passo (steppers) que mostram progresso atrav�s de uma sequ�ncia de passos, �teis para processos de m�ltiplas etapas como checkouts ou formul�rios longos.",
  dNCToolbar: "Barras de ferramentas que oferecem acesso r�pido a a��es e ferramentas frequentemente usadas, podendo ser parte da navega��o de conte�do ou a��o.",
  dNCAccordion: "Acorde�es que permitem a expans�o e contra��o de se��es de conte�do, organizando grandes quantidades de informa��o em um espa�o compacto.",
  dNCPopup: "Popups que fornecem informa��es adicionais, mensagens ou conte�do interativo, aparecendo sobre o conte�do existente sem redirecionar o usu�rio.",
  dNCScrollspy: "Um componente que atualiza links de navega��o baseados na rolagem, indicando qual se��o do conte�do est� atualmente vis�vel na tela.",

  dATText: "Para apresentar blocos de texto simples.",
  dATBanner: "Para exibir banners promocionais ou informativos.",
  dATQuote: "Para destacar cita��es ou depoimentos.",
  dATRich: "Para apresentar texto com formata��o rica.",

  dAIImages: "Para apresentar imagens individuais ou em grupo.",
  dAIIcons: "Para exibir �cones representativos.",
  dAIAvatar: "Para mostrar avatares de usu�rios ou personagens.",
  dAIGallery: "Para exibir cole��es de imagens em formato de galeria.",
  dAICarousel: "Para apresentar imagens em um carrossel rotativo.",
  dAISliders: "Para mostrar imagens ou banners em um slider.",
  dAIMaps: "Para exibir mapas est�ticos ou interativos.",

  dAVEmbedded: "Para incorporar v�deos de plataformas externas.",
  dAVImage: "Para mostrar v�deos em formato de imagem, como GIFs ou v�deos animados.",
  dAVVideo: "Para listar v�deos em uma sequ�ncia ou cole��o.",

  dASPlayer: "Para reproduzir arquivos de �udio ou m�sica.",
  dASSound: "Para executar efeitos sonoros em a��es espec�ficas.",
  dASPodcast: "Para reproduzir epis�dios de podcast.",

  dAC2d: "Para exibir gr�ficos bidimensionais.",
  dAC3d: "Para mostrar gr�ficos tridimensionais.",

  dAALoading: "Anima��es que indicam carregamento de conte�do.",
  dAAClick: "Anima��es ativadas por cliques ou intera��es do usu�rio.",
  dAAJava: "Anima��es complexas criadas com JavaScript.",
  dAAIndicators: "Componentes projetados para informar o usu�rio sobre o estado ou progresso de uma opera��o. Inclui barras de progresso, indicadores de carregamento, luzes de status e outros elementos visuais que comunicam informa��es essenciais de forma clara e concisa. Esses componentes s�o fundamentais para melhorar a experi�ncia do usu�rio, fornecendo feedback visual imediato sobre as a��es em andamento.",

  dAEPost: "Para incorporar posts de redes sociais diretamente na p�gina.",
  dAEFeed: "Para mostrar feeds ao vivo de redes sociais na aplica��o.",

  dAMToast: "Mensagens breves que aparecem e desaparecem automaticamente, ideais para feedback de a��es n�o intrusivas.",
  dAMAlert: "Alertas s�o notifica��es importantes que requerem a aten��o do usu�rio, podendo ser usadas para erros cr�ticos, avisos ou confirma��es.",
  dAMSneackbar: "Snackbars fornecem mensagens breves com a op��o de uma a��o pelo usu�rio, como desfazer uma a��o ou fechar a mensagem.",
  dAMModal: "Modais s�o janelas que aparecem em cima do conte�do da p�gina para comunicar mensagens importantes ou exigir uma a��o do usu�rio antes de prosseguir.",
  dAMNotification: "Notifica��es s�o mensagens que podem ser enviadas a usu�rios mesmo quando n�o est�o ativamente usando a aplica��o, �teis para atualiza��es importantes ou lembretes.",
  dAMBadges: "Badges indicam status ou contam itens, como mensagens n�o lidas ou notifica��es, geralmente sobrepostos a �cones ou bot�es.",

  dLFSection: "Divide o conte�do em se��es l�gicas e distintas, facilitando a organiza��o e a compreens�o pelo usu�rio.",
  dLFGroup: "Agrupa elementos relacionados, promovendo uma visualiza��o organizada e coesa do conte�do.",
  dLFRow: "Organiza itens em uma sequ�ncia horizontal, ideal para listar elementos que compartilham um contexto.",
  dLFColumn: "Organiza itens em uma sequ�ncia vertical, suportando estruturas hier�rquicas ou listagens ordenadas.",
  dLFGrid: "Apresenta cole��es de itens em uma estrutura bidimensional, facilitando a compara��o e visualiza��o.",
  dLFAdaptive: "Layouts que se ajustam dinamicamente ao tamanho do dispositivo, mantendo a acessibilidade e a usabilidade.",
  dLFSplit: "Divide a tela em �reas distintas para intera��o simult�nea com diferentes conte�dos.",

  dLGTable: "Apresenta dados em formato tabular, permitindo f�cil an�lise e compara��o de informa��es.",
  dLGCards: "Destaca conjuntos de informa��es ou itens individuais em formato de cart�es, oferecendo uma vis�o geral acess�vel.",

  dBVPdf: "Componente para visualizar documentos PDF dentro da aplica��o. Permite aos usu�rios ler e interagir com conte�do PDF diretamente na interface, sem necessidade de downloads ou aplicativos externos.",
  dBVViwer: "Visualizador de planilhas que suporta formatos como Excel. Facilita a visualiza��o e manipula��o de dados de planilhas dentro da aplica��o, permitindo an�lises e revis�es diretas.",
  dBVDocument: "Permite a visualiza��o de v�rios formatos de documentos, como Word, PowerPoint e PDF, integrando uma vis�o de conte�do rico sem a necessidade de software adicional.",

  dBPCalendar: "Plugin de calend�rio que oferece visualiza��es e intera��es com eventos e agendas. Integra-se com sistemas externos para sincroniza��o e gerenciamento de eventos.",
  dBPSchedule: "Componente para planejamento e visualiza��o de agendas pessoais ou profissionais. Permite aos usu�rios organizar e visualizar compromissos, tarefas e eventos em um layout claro e interativo.",
  dBPExternal: "Facilita a integra��o com APIs externas para buscar ou enviar dados. Ideal para funcionalidades como visualizar condi��es clim�ticas, cota��es de a��es ou atualiza��es de redes sociais diretamente na aplica��o.",

  dBPPages: "Permite a incorpora��o de p�ginas inteiras ou componentes espec�ficos dentro da aplica��o atual. �til para integrar funcionalidades ou informa��es adicionais sem a necessidade de navega��o externa."


}

const message_en = {
  dForms: "Components for creating and manipulating forms, allowing structured data entry by the user.",
  dNavigation: "Components designed to facilitate user movement through the application, encompassing both navigation between different pages and content manipulation within the same page.",
  dApresentation: "Components designed to present static content in different formats, such as text, images, videos, sounds, and graphics.",
  dLayout: "Defines the structure and visual organization of elements in the user interface. It encompasses components and techniques to arrange content in a logical and aesthetically pleasing manner, enhancing the user's experience while navigating and interacting with the application.",
  dBlocks: "Groups complex components that encapsulate specific functionalities and are composed of multiple elements. These blocks are designed to offer advanced interactive features, such as calendars, document viewers, and scheduling systems, enriching the user experience with integrated and customizable functionalities.",

  // definition sub group 1 (2 itens 'a / b')
  dFInput: "Input fields for collecting user information, including text, numbers, dates, selections, and more.",
  dFRecords: "Record viewers to present data to the user in different formats such as tables, lists, cards, and geographic maps.",
  dFTree: "Components for viewing and editing data in a hierarchical structure, such as data trees, adapted breadcrumbs, and mind maps.",
  dFSubmit: "Components focused on finalizing user interactions with forms. Includes buttons to submit, cancel, or clear forms, as well as mechanisms to send data to external systems. Essential for facilitating conclusive actions within forms, ensuring a clear and efficient interface for data collection and related actions. Special considerations for user feedback and security and privacy issues are fundamental in this group.",

  dNLinks: "Set of components focused on navigation between pages or resources, either within the application itself or to external sites. Includes menus, buttons, direct links, and anchors for internal navigation.",
  dNContent: "Components specialized in presenting and interacting with different types of content within a page, such as tabs, accordions, and popups, allowing for a more dynamic and interactive user experience.",

  dAText: "Components for presenting textual content, including plain text, banners, quotes, and rich text.",
  dAImages: "Components for displaying images, icons, avatars, galleries, carousels, sliders, and maps.",
  dAVideos: "Components for embedding videos, displaying image videos (like GIFs or animated videos), and video playlists.",
  dASound: "Components for sound playback, including audio players, sound effects, and podcast players.",
  dACharts: "Components for displaying charts in 2D or 3D, facilitating data visualization.",
  dAAnimations: "Animations to enrich user interaction, including loadings, clicks, and JavaScript animations.",
  dAEmbeds: "Components for embedding social media content, such as posts and feeds.",
  dAMessages: "Components designed to provide user feedback through messages, alerts, and notifications. Includes everything from toasts and snackbars, which offer brief and direct feedback, to modal alerts and more persistent notifications. Ideal for informing users about action results, important warnings, or new messages received. These components are designed to be intuitive and minimally intrusive, ensuring effective communication without compromising the user experience.",

  dLFlow: "Components and techniques focused on the sequential or structured arrangement of content, such as sections, groups, rows, columns, and grids. Includes adaptive and responsive approaches to ensure optimal presentation on different devices and screen sizes.",
  dLGroup: "Tools and components dedicated to grouping related elements to highlight information or organize content cohesively. Includes tables for tabular data and cards for compact visual representations of information.",

  dBView: "Subgroup dedicated to components for content viewing, such as PDF documents, spreadsheets, and other file formats. Allows users to access and interact with a variety of data directly within the application.",
  dBPlugins: "Includes third-party integrable components, offering ready-to-use additional functionalities. Extends the application's capabilities with specialized solutions, such as maps, analytics, and social media widgets.",
  dBProjects: "Groups custom internal components, such as search pages and specific detail views. These blocks are designed to complement the application with specific functionalities and detailed views of data or processes.",

  // definition final group (3 itens 'a / b / c')
  dFINumber: "Allows the user to input numerical values, with support for minimum and maximum limits.",
  dFIString: "Field for free text, with configurable validations such as maximum length and regular expressions.",
  dFIBoolean: "Component for binary choice, like switches or checkboxes, ideal for yes/no settings.",
  dFIDate: "Date selector, with configuration options to limit periods.",
  dFITime: "Allows the user to select a time, with support for different time formats.",
  dFIDateRange: "Component for selecting date ranges, useful for period filters.",
  dFISelectOne: "Selector for a single option among many, which can be presented as a dropdown, combobox, etc.",
  dFIMultSelect: "Allows multiple option selection, ideal for filters or advanced settings.",
  dFIColor: "Color picker, with support for different color formats (RGB, HEX, etc.).",
  dFIEditor: "Rich text editor, allowing basic formatting (bold, italic) and insertion of elements like lists and tables.",
  dFIFeedBack: "For rating or thumbs up/down (approval or disapproval), allowing the user to express opinions simply.",
  dFIFile: "For attaching a file, with support for drag and drop and upload progress visualization.",

  dFRTable: "Displays data in table format, with support for sorting and filtering.",
  dFRList: "List of items, customizable to display summarized or detailed information.",
  dFRTimeline: "Presents events or records in a timeline, facilitating the visualization of sequences or histories.",
  dFRCards: "Data presented in cards, ideal for visual summaries with images or icons.",
  dFRMap: "Displays geographic information on a map, supporting markers and custom regions.",
  dFRPagination: "Data table with pagination, to manage large data sets without overloading the interface.",
  dFRInfinity: "Table that automatically loads more data as the user scrolls the page, for smooth navigation through large data sets.",

  dFTView: "Hierarchical data structure that allows for expansion and contraction of nodes, useful for categories or organizational structures.",
  dFTBreadcrumbs: "Hierarchical sequence of links representing the user's navigation or current location, here adapted for editing hierarchical structures.",
  dFTDropdown: "Nested dropdowns that allow selection at multiple levels of a hierarchy.",
  dFTAccordions: "Nested accordions to organize content or categories into multiple layers, facilitating navigation in complex structures.",
  dFTTags: "Set of tags or keywords representing frequency or importance, allowing dynamic editing and organization.",
  dFTMap: "Mind map for organizing and visualizing ideas or concepts in a radial structure, facilitating editing and expansion of related concepts.",

  dFSSubmit: "Button to submit the form. When clicked, it collects and sends the form data to the server or designated handler. Essential for finalizing user data entry.",
  dFSCancel: "Button to cancel the form operation, allowing the user to abort their action and typically return to the previous state or screen. Helps ensure safe navigation without data submission.",
  dFSClear: "Button to clear all form fields, removing user inputs. Useful in long or complex forms where reset may be necessary.",
  dFSSend: "Mechanism for sending form data to an external system or website. Used for integrations with third-party APIs or for collecting information across different platforms. Must ensure user data security and privacy.",

  dNLMenus: "Menus that provide primary navigation through the application or to external sites. Support hierarchical structures to organize navigation options.",
  dNLButtons: "Buttons used for navigation actions, such as submitting forms or redirecting to other internal or external pages.",
  dNLLinks: "Links for direct navigation between application pages or external resources, with support for opening in a new tab depending on the context (target).",
  dNLBreadcrumbs: "Hierarchical navigation paths that indicate the user's current location within the application and facilitate returning to previous levels.",
  dNLAnchors: "Anchors that allow internal navigation on a page, directing the user to specific sections without reloading the page.",

  dNCTab: "Tabs that organize related content into separate sections, allowing switching between them without reloading the page.",
  dNCScenary: "Components that guide the user through scenarios or sequential steps within the same page, ideal for tutorials or step-by-step configurations.",
  dNCStepper: "Step indicators (steppers) that show progress through a sequence of steps, useful for multi-step processes such as checkouts or long forms.",
  dNCToolbar: "Toolbars that offer quick access to frequently used actions and tools, which can be part of content or action navigation.",
  dNCAccordion: "Accordions that allow expanding and collapsing sections of content, organizing large amounts of information in a compact space.",
  dNCPopup: "Popups that provide additional information, messages, or interactive content, appearing over the existing content without redirecting the user.",
  dNCScrollspy: "A component that updates navigation links based on scrolling, indicating which section of the content is currently visible on the screen.",

  dATText: "To present blocks of simple text.",
  dATBanner: "To display promotional or informational banners.",
  dATQuote: "To highlight quotations or testimonials.",
  dATRich: "To present text with rich formatting.",

  dAIImages: "To present individual or grouped images.",
  dAIIcons: "To display representative icons.",
  dAIAvatar: "To show user or character avatars.",
  dAIGallery: "To display collections of images in gallery format.",
  dAICarousel: "To present images in a rotating carousel.",
  dAISliders: "To display images or banners in a slider.",
  dAIMaps: "To display static or interactive maps.",

  dAVEmbedded: "To embed videos from external platforms.",
  dAVImage: "To display videos in image format, such as GIFs or animated videos.",
  dAVVideo: "To list videos in a sequence or collection.",

  dASPlayer: "To play audio files or music.",
  dASSound: "To play sound effects on specific actions.",
  dASPodcast: "To play podcast episodes.",

  dAC2d: "To display two-dimensional charts.",
  dAC3d: "To show three-dimensional charts.",

  dAALoading: "Animations indicating content loading.",
  dAAClick: "Animations triggered by clicks or user interactions.",
  dAAJava: "Complex animations created with JavaScript.",
  dAAIndicators: "Components designed to inform the user about the state or progress of an operation. Includes progress bars, loading indicators, status lights, and other visual elements that communicate essential information clearly and concisely. These components are essential for improving the user experience by providing immediate visual feedback on ongoing actions.",

  dAEPost: "To embed social media posts directly on the page.",
  dAEFeed: "To display live social media feeds in the application.",

  dAMToast: "Brief messages that appear and disappear automatically, ideal for non-intrusive action feedback.",
  dAMAlert: "Alerts are important notifications that require the user's attention, and can be used for critical errors, warnings, or confirmations.",
  dAMSneackbar: "Snackbars provide brief messages with the option for user action, such as undoing an action or closing the message.",
  dAMModal: "Modals are windows that appear on top of the page content to communicate important messages or require user action before proceeding.",
  dAMNotification: "Notifications are messages that can be sent to users even when they are not actively using the application, useful for important updates or reminders.",
  dAMBadges: "Badges indicate status or count items, such as unread messages or notifications, usually overlaid on icons or buttons.",

  dLFSection: "Divides content into logical and distinct sections, facilitating organization and understanding by the user.",
  dLFGroup: "Groups related elements, promoting an organized and cohesive view of the content.",
  dLFRow: "Organizes items in a horizontal sequence, ideal for listing elements that share a context.",
  dLFColumn: "Organizes items in a vertical sequence, supporting hierarchical structures or ordered listings.",
  dLFGrid: "Presents collections of items in a two-dimensional structure, facilitating comparison and visualization.",
  dLFAdaptive: "Layouts that dynamically adjust to the device size, maintaining accessibility and usability.",
  dLFSplit: "Divides the screen into distinct areas for simultaneous interaction with different content.",

  dLGTable: "Displays data in tabular format, allowing easy analysis and comparison of information.",
  dLGCards: "Highlights sets of information or individual items in card format, providing an accessible overview.",

  dBVPdf: "Component for viewing PDF documents within the application. Allows users to read and interact with PDF content directly in the interface, without the need for downloads or external applications.",
  dBVViwer: "Spreadsheet viewer that supports formats such as Excel. Facilitates the visualization and manipulation of spreadsheet data within the application, allowing for direct analysis and reviews.",
  dBVDocument: "Allows the visualization of various document formats, such as Word, PowerPoint, and PDF, integrating a rich content view without the need for additional software.",

  dBPCalendar: "Calendar plugin that offers views and interactions with events and schedules. Integrates with external systems for event synchronization and management.",
  dBPSchedule: "Component for planning and viewing personal or professional schedules. Allows users to organize and view appointments, tasks, and events in a clear and interactive layout.",
  dBPExternal: "Facilitates integration with external APIs to fetch or send data. Ideal for features such as viewing weather conditions, stock quotes, or social media updates directly in the application.",

  dBPPages: "Allows the embedding of entire pages or specific components within the current application. Useful for integrating additional functionality or information without the need for external navigation."

}

type MessageType = typeof message_en;

const messages: { [key: string]: MessageType } = {
  'en-us': message_en,
  'pt-br': message_pt
}

const getMessageKey = (messages: any): string => {
  const keys = Object.keys(messages);
  if (!keys || keys.length < 1) throw new Error('Error Message not valid for international');
  const firstKey = keys[0];
  const lang = (document.documentElement.lang || '').toLowerCase();
  if (!lang) return firstKey;
  if (messages.hasOwnProperty(lang)) return lang;
  const similarLang = keys.find((key: string) => lang.substring(0, 2) === key);
  if (similarLang) return similarLang;
  return firstKey;
}

const lang = getMessageKey(messages);
const msg: MessageType = messages[lang];

const icaDescriptions: icaBase.FormComponent[] = [
  // definition principal group 
  { group: "Forms", description: msg.dForms },
  { group: "Navigation", description: msg.dNavigation },
  { group: "Apresentation", description: msg.dApresentation },
  { group: "Layout", description: msg.dLayout },
  { group: "Blocks", description: msg.dBlocks },

  // definition sub group 1 (2 itens 'a / b')
  { group: "Forms / Input", description: msg.dFInput },
  { group: "Forms / Records", description: msg.dFRecords },
  { group: "Forms / Tree", description: msg.dFTree },
  { group: "Forms / Submit", description: msg.dFSubmit },

  { group: "Navigation / Links", description: msg.dNLinks },
  { group: "Navigation / Content", description: msg.dNContent },

  { group: "Apresentation / Text", description: msg.dAText },
  { group: "Apresentation / Images", description: msg.dAImages },
  { group: "Apresentation / Video", description: msg.dAVideos },
  { group: "Apresentation / Sound", description: msg.dASound },
  { group: "Apresentation / Charts", description: msg.dACharts },
  { group: "Apresentation / Animations", description: msg.dAAnimations },
  { group: "Apresentation / Embeds", description: msg.dAEmbeds },
  { group: "Apresentation / Messages", description: msg.dAMessages },

  { group: "Layout / Flow", description: msg.dLFlow },
  { group: "Layout / Group", description: msg.dLGroup },

  { group: "Blocks / Viewer", description: msg.dBView },
  { group: "Blocks / Plugins", description: msg.dBPlugins },
  { group: "Blocks / Projects", description: msg.dBProjects },


  // definition final group (3 itens 'a / b / c')
  // Input
  {
    group: "Forms / Input / Number",
    description: msg.dFINumber,
    prompt: "O componente, um 'Input / Form / Number', deve apresentar uma combina��o de uma caixa de entrada de texto e um controle deslizante (slider). Ele deve permitir que os usu�rios digitem um n�mero diretamente na caixa de entrada, ajustando o controle deslizante de acordo dentro de um intervalo m�nimo e m�ximo pr�-definido. Se o usu�rio inserir um n�mero inv�lido, uma mensagem de erro vermelha deve aparecer abaixo do componente.",
    attributes: "name,datasource,placeholder,label,pattern,errormessage,maxvalue,minvalue,step,required,disabled,readonly,autofocus,hint,inputmode"
  },
  { group: "Forms / Input / String", description: msg.dFIString, attributes: "name,hint,label,required,disabled,readonly,maxlength,minlength,placeholder,pattern,errormessage,autofocus,autoCapitalize,autocorrect,autocomplete, datasource" },
  { group: "Forms / Input / Boolean", description: msg.dFIBoolean },
  { group: "Forms / Input / Date", description: msg.dFIDate },
  { group: "Forms / Input / Time", description: msg.dFITime },
  { group: "Forms / Input / Date Range", description: msg.dFIDateRange },
  { group: "Forms / Input / Select One", description: msg.dFISelectOne, attributes: "hint,label,required,disabled,options,selectedvalue" },
  { group: "Forms / Input / MultiSelect", description: msg.dFIMultSelect },
  { group: "Forms / Input / Color", description: msg.dFIColor },
  { group: "Forms / Input / Editor", description: msg.dFIEditor },
  { group: "Forms / Input / Feedback", description: msg.dFIFeedBack },
  { group: "Forms / Input / File", description: msg.dFIFile },

  // Records
  { group: "Forms / Records / Table", description: msg.dFRTable },
  { group: "Forms / Records / Table", description: msg.dFRTable },
  { group: "Forms / Records / List", description: msg.dFRList },
  { group: "Forms / Records / Timeline", description: msg.dFRTimeline },
  { group: "Forms / Records / Cards", description: msg.dFRCards },
  { group: "Forms / Records / Map (Geo)", description: msg.dFRMap },
  { group: "Forms / Records / Table with Pagination", description: msg.dFRPagination },
  { group: "Forms / Records / Table with Infinite Scroll", description: msg.dFRInfinity },

  // Tree
  { group: "Forms / Tree / Tree View", description: msg.dFTView },
  { group: "Forms / Tree / Breadcrumbs", description: msg.dFTBreadcrumbs },
  { group: "Forms / Tree / Nested Dropdown", description: msg.dFTDropdown },
  { group: "Forms / Tree / Nested Accordions", description: msg.dFTAccordions },
  { group: "Forms / Tree / Tag Cloud", description: msg.dFTTags },
  { group: "Forms / Tree / Mind Map", description: msg.dFTMap },

  // Submit
  { group: "Forms / Submit / Submit", description: msg.dFSSubmit },
  { group: "Forms / Submit / Cancel", description: msg.dFSCancel },
  { group: "Forms / Submit / Clear", description: msg.dFSClear },
  { group: "Forms / Submit / Send External", description: msg.dFSSend },


  // Links
  { group: "Navigation / Links / Menus", description: msg.dNLMenus },
  { group: "Navigation / Links / Button", description: msg.dNLButtons },
  { group: "Navigation / Links / Links", description: msg.dNLLinks },
  { group: "Navigation / Links / Breadcrumbs", description: msg.dNLBreadcrumbs },
  { group: "Navigation / Links / Anchors", description: msg.dNLAnchors },

  // Content
  { group: "Navigation / Content / Tab", description: msg.dNCTab },
  { group: "Navigation / Content / Scenary", description: msg.dNCScenary },
  { group: "Navigation / Content / Stepper", description: msg.dNCStepper },
  { group: "Navigation / Content / Toolbar", description: msg.dNCToolbar },
  { group: "Navigation / Content / Accordion", description: msg.dNCAccordion },
  { group: "Navigation / Content / Popup", description: msg.dNCPopup },
  { group: "Navigation / Content / Scrollspy", description: msg.dNCScrollspy },

  // Text
  { group: "Apresentation / Text / Text", description: msg.dATText },
  { group: "Apresentation / Text / Banner", description: msg.dATBanner },
  { group: "Apresentation / Text / Quote", description: msg.dATQuote },
  { group: "Apresentation / Text / Rich Text", description: msg.dATRich },

  // Images
  { group: "Apresentation / Images / Images", description: msg.dAIImages },
  { group: "Apresentation / Images / Icons", description: msg.dAIIcons },
  { group: "Apresentation / Images / Avatar", description: msg.dAIAvatar },
  { group: "Apresentation / Images / Gallery", description: msg.dAIGallery },
  { group: "Apresentation / Images / Carousel", description: msg.dAICarousel },
  { group: "Apresentation / Images / Sliders", description: msg.dAISliders },
  { group: "Apresentation / Images / Maps", description: msg.dAIMaps },

  // Video
  { group: "Apresentation / Video / Embedded Video", description: msg.dAVEmbedded },
  { group: "Apresentation / Video / Image Video", description: msg.dAVImage },
  { group: "Apresentation / Video / Video Playlist", description: msg.dAVVideo },

  // Sound
  { group: "Apresentation / Sound / Player", description: msg.dASPlayer },
  { group: "Apresentation / Sound / Sound Effects", description: msg.dASSound },
  { group: "Apresentation / Sound / Podcast Player", description: msg.dASPodcast },

  // Charts
  { group: "Apresentation / Charts / 2D", description: msg.dAC2d },
  { group: "Apresentation / Charts / 3D", description: msg.dAC3d },

  // Animations
  { group: "Apresentation / Animations / Loading", description: msg.dAALoading },
  { group: "Apresentation / Animations / OnClick", description: msg.dAAClick },
  { group: "Apresentation / Animations / JavaScript Animations", description: msg.dAAJava },
  { group: "Apresentation / Indicators", description: msg.dAAIndicators },

  // Embeds
  { group: "Apresentation / Embeds / Social Media Posts", description: msg.dAEPost },
  { group: "Apresentation / Embeds / Social Media Feeds", description: msg.dAEFeed },


  // Messages
  { group: "Apresentation / Messages / Toast", description: msg.dAMToast },
  { group: "Apresentation / Messages / Alert", description: msg.dAMAlert },
  { group: "Apresentation / Messages / Snackbar", description: msg.dAMSneackbar },
  { group: "Apresentation / Messages / Modal", description: msg.dAMModal },
  { group: "Apresentation / Messages / Notification", description: msg.dAMNotification },
  { group: "Apresentation / Messages / Badge", description: msg.dAMBadges },

  // Flow
  { group: "Layout / Flow / Section", description: msg.dLFSection },
  { group: "Layout / Flow / Group", description: msg.dLFGroup },
  { group: "Layout / Flow / Row", description: msg.dLFRow },
  { group: "Layout / Flow / Column", description: msg.dLFColumn },
  { group: "Layout / Flow / Grid", description: msg.dLFGrid },
  { group: "Layout / Flow / Adaptive", description: msg.dLFAdaptive },
  { group: "Layout / Flow / Split", description: msg.dLFSplit },

  // Group
  { group: "Layout / Group / Table", description: msg.dLGTable },
  { group: "Layout / Group / Cards", description: msg.dLGCards },

  // Viewer
  { group: "Blocks / Viewer / PDF Viewer", description: msg.dBVPdf },
  { group: "Blocks / Viewer / Spreadsheet Viewer", description: msg.dBVViwer },
  { group: "Blocks / Viewer / Document Viewer", description: msg.dBVDocument },

  // Plugins
  { group: "Blocks / Plugins / Calendar", description: msg.dBPCalendar },
  { group: "Blocks / Plugins / Schedule", description: msg.dBPSchedule },
  { group: "Blocks / Plugins / External API", description: msg.dBPExternal },

  // Projects
  { group: "Blocks / Projects / Pages", description: msg.dBPPages },

];

const attributeDefinitions: icaBase.AttributeDefinition[] = [

  { path: "name", lit: "@property({ type: String }) name: string | undefined;" },
  { path: "hint", lit: "@property({ type: String }) hint: string | undefined; // An optional descriptive hint for the field", variations: true },
  { path: "label", lit: "@property({ type: String }) label: string | undefined; // A label to identify this field", variations: true },
  { path: "required", lit: "@property({ type: Boolean }) required: boolean = false; // Whether the field is required or optional" },
  { path: "disabled", lit: "@property({ type: Boolean }) disabled: boolean = false; // Whether the field is ready for input or disabled" },
  { path: "maxvalue", lit: "@property({ type: Number }) maxvalue: number | undefined = undefined; // Maximum value restriction for the input" },
  { path: "minvalue", lit: "@property({ type: Number }) minvalue: number | undefined = undefined; // Minimum value restriction for the input" },
  { path: "step", lit: "@property({ type: Number }) step: number | undefined = undefined; // The step increment between values" },
  { path: "placeholder", lit: "@property({ type: String }) placeholder: string| undefined; // Placeholder text for the input field", variations: true },
  { path: "pattern", lit: "@property({ type: String }) pattern: string| undefined; // A regular expression that the input's value must match" },
  { path: "errormessage", lit: "@property({ type: String }) errormessage: string| undefined; // Custom error message to display when input validation fails", variations: true },
  { path: "autofocus", lit: "@property({ type: Boolean }) autofocus: boolean = false; // Whether the field should be automatically focused on page load" },
  { path: "maxlength", lit: "@property({ type: Number }) maxlength: number | undefined = undefined; // Maximum length restriction for the input" },
  { path: "minlength", lit: "@property({ type: Number }) minlength: number | undefined = undefined; // Minimum length restriction for the input" },
  { path: "autoCapitalize", lit: "@property({ type: String }) autoCapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' = undefined; // Controls whether and how text input is automatically capitalized as it is entered by the user." },
  { path: "autocorrect", lit: "@property({ type: String }) autocorrect: 'off' | 'on' = undefined; // Indicates whether the browser's autocorrect feature is on or off." },
  { path: "autocomplete", lit: "@property({ type: String }) autocomplete: string | undefined;" },
  { path: "value", lit: "@property({ type: String }) value: string | undefined;", variations: true },
  { path: "options", lit: "@property() options: OptionItem[] | undefined; // Optional path in the global JSON or a valid JSON for a list of options " },
  { path: "selectedvalue", lit: "@property() selectedvalue: string | undefined;" },
  { path: "inputmode", lit: " @property({ type: String }) inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' = 'none';" },

];

export function getDescriptionsRootGroup(): string[] {
  const rootGroups = new Set<string>();
  icaDescriptions.forEach(component => {
    const groupName = component.group.split('/')[0].trim();
    rootGroups.add(groupName);
  });
  return Array.from(rootGroups);
}

export function getDescriptionsSubGroup(root: string): string[] {
  const rc = new Set<string>();
  icaDescriptions.forEach(component => {
    const parts = component.group.split('/');
    if (parts.length > 1 && parts[0].trim() === root) rc.add(parts[1].trim());
  });
  return Array.from(rc);
}

export function getDescriptionsFinalGroup(root: string, subGroup: string): string[] {
  const rc = new Set<string>();
  icaDescriptions.forEach(component => {
    const parts = component.group.split('/');
    if (parts.length > 2 && parts[0].trim() === root && parts[1].trim() === subGroup) rc.add(parts[2].trim());
  });
  return Array.from(rc);
}

export function getFormComponentsDescription(root: string, subGroup: string | null, finalGroup: string | null): string {
  let len = 3;
  if (subGroup === null) len = 1;
  else if (finalGroup === null) len = 2;
  for (const component of icaDescriptions) {
    const parts = component.group.split('/');
    if (parts.length === len &&
      parts[0].trim() === root &&
      (subGroup === null || parts[1].trim() === subGroup) &&
      (finalGroup === null || parts[2].trim() === finalGroup)) return component.description;
  };
  return "";
}

export function getFormComponentsPrompt(root: string, subGroup: string, finalGroup: string): string {
  for (const component of icaDescriptions) {
    const parts = component.group.split('/');
    if (parts.length === 3 &&
      parts[0].trim() === root &&
      parts[1].trim() === subGroup &&
      parts[2].trim() === finalGroup) return component.prompt || "";
  };
  return "";
}

export function getFormComponentsAttributes(root: string, subGroup: string, finalGroup: string): string {
  for (const component of icaDescriptions) {
    const parts = component.group.split('/');
    if (parts.length === 3 &&
      parts[0].trim() === root &&
      parts[1].trim() === subGroup &&
      parts[2].trim() === finalGroup) return component.attributes || "";
  };
  return "";
}

export function getAttributeDefinitions(root: string, subGroup: string, finalGroup: string): string[] {
  const rc = new Set<string>();
  const atts: string = getFormComponentsAttributes(root, subGroup, finalGroup);
  if (!atts) return [];
  const obj1 = attributeDefinitions.find(def => def.path === atts);
  if (obj1) rc.add(obj1.lit)
  else rc.add('// ' + atts + ' dont exists')
  return Array.from(rc);
}

export function getAttributeDefinitionsLit(root: string, subGroup: string, finalGroup: string): string[] {
  const rc = new Set<string>();
  const attrs = getFormComponentsAttributes(root, subGroup, finalGroup)
  for (const att of attrs.split(',')) {
    const def = attributeDefinitions.find((item) => item.path === att);
    if (def) rc.add(def.lit);
  };
  return Array.from(rc);
}

export function checkAttributteHasVariation(attribute: string): boolean {
  const attr = attributeDefinitions.find((attr) => attr.path === attribute);
  if (!attr) return false;
  return attr.variations === true;
}