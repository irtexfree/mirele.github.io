$(function() {

    var r_function = function (list = {}, id="string") {

        var body = '';

        for (const function_ of list) {
            body += `<tr>
                           <td valign="top">${function_.func}</td>
                           <td valign="top">${function_.desc}</td>
                           <td valign="top">${function_.params.join('<br><hr>')}</td>
                           <td valign="top">${function_.ret}</td>
                       </tr>`;
        }

        return `<table width="100%">

                       <thead>
                           <th>Function</th>
                           <th>Description</th>
                           <th>Params</th>
                           <th>Return</th>
                       </thead>
            
                        ${body}
                       
                   </table ${id ? `id=${id}` : ''}>`;
    }

    var r_options = function (list = {}, id="string") {

        var body = '';

        for (const function_ of list) {
            body += `<tr>
                           <td valign="top">${function_.option}</td>
                           <td valign="top">${function_.desc}</td>
                           <td valign="top">${function_.type}</td>
                       </tr>`;
        }

        return `<table width="100%" ${id ? `id=${id}` : ''}>

                       <thead>
                           <th>Option name</th>
                           <th>Description</th>
                           <th>Data type</th>
                       </thead>
            
                        ${body}
                       
                   </table>`;
    }

    var router = new VueRouter({
        mode: 'history',
        routes: []
    });

    new Vue({
        router,
        el: 'div[type="cards"]',
        data: {
            list: [
                {
                    title: 'Mirele for Clients',
                    content: 'If you are a Mirele customer and need help, you can refer to this documentation.',
                    link: {
                        text: 'Go to Article Block',
                        url: '#mirele_for_clients'
                    }
                },
                {
                    title: 'Mirele Developer',
                    content: 'If you want to study the source code of Mirele, you can refer to this documentation.',
                    link: {
                        text: 'Go to Article Block',
                        url: '#'
                    }
                },
                {
                    title: 'Mirele Repository',
                    content: 'If you want to learn the structure of Git repositories for Mirele, you can refer to this documentation.',
                    link: {
                        text: 'Go to Article Block',
                        url: '#'
                    }
                },
                {
                    title: 'Mirele Community',
                    content: 'If you find problems in Mirele\'s security or optimization problems, you can refer to this documentation.',
                    link: {
                        text: 'Go to Article Block',
                        url: '#'
                    }
                }
            ]
        }
    });

    new Vue({
        router,
        el: 'ul[role="navbar"]',
        data: {
            items: {
                mireleForYou: [
                    {
                        content: "Create page",
                        url: "#Create page"
                    },
                    {
                        content: "Remove page",
                        url: "#Remove page"
                    },
                    {
                        content: "Create block",
                        url: "#Create block"
                    },
                    {
                        content: "Edit block",
                        url: "#Edit block"
                    },
                    {
                        content: "Create WordPress page",
                        url: "#Create WordPress page"
                    },
                    {
                        content: "Migration (Export/Import)",
                        url: "#Migration (Export/Import)"
                    },
                    {
                        content: "Market",
                        url: "#Market"
                    },
                    {
                        content: "Choosing interface options",
                        url: "#Choosing interface options"
                    },
                    {
                        content: "WooCommerce",
                        url: "#WooCommerce"
                    }
                ],
                dev: [
                    {
                        content: "Development block",
                        url: "#Development block"
                    },
                    {
                        content: "Register options of block",
                        url: "#register_options_of_block"
                    },
                    {
                        content: "Package manager",
                        url: "#package_manager"
                    },
                    {
                        content: "Development element",
                        url: "#Development element"
                    },
                    {
                        content: "Element types table",
                        url: "#element_types_table"
                    },
                    {
                        content: "Get single image/video",
                        url: "#get_single_src"
                    },
                    {
                        content: "Register your own option types",
                        url: "#Register your own option types"
                    },
                    {
                        content: "Available option data types",
                        url: "#available_option_data_types"
                    },
                    {
                        content: "Default options",
                        url: "#default_options"
                    }
                ]

            }
        }
    });

    new Vue({
        router,
        el: 'main[role="main"]',
        data: {
            mirele_for_clients: [
                {
                    title: 'Create page',
                    content: [
                        "Mirele uses the Rosemary block editor (this editor is supplied for the first time with Mirele and is an editor iRTEX the author). The concepts \"Rosemary Editor\" and \"Mirele Editor\" can be considered equal. <i>Each page created in Rosemary Editor is not a default WordPress page.</i> You can create a WordPress page using the shortcode on a regular page WordPress or you can use a special function in the editor.",
                        "To create a new Rosemary page, you need to go to the WordPress Administrator panel and find <u>\"Mirele Pages\"</u> in the right main menu, then click <u>\"Add New\"</u> and enter the name of your new page. I suggest using lowercase and not using spaces, commas, periods, etc. It is better to use characters that replace the space: - _",
                        "When you create a page by clicking on the Confirm button, you enter the Rosemary page editor described in the articles below"
                    ]
                },
                {
                    title: 'Remove page',
                    content: [
                        "Any Rosemary page you can be removed very easily.",
                        "To do this, go to the <u>\"Mirele Pages\"</u> page and find the required page in the table and click <u>\"Remove Page\"</u> in the menu that appears"
                    ]
                },
                {
                    title: 'Create block',
                    content: [
                        "On a blank editable page in the panel next to the header there are control buttons. To create a page you need to click on the appropriate button.",
                        "Clicking <u>\"Insert Block\"</u> opens the Block Collection. This collection contains all installed blocks in your system. You can use each block multiple times on the same page.",
                        "Each block in the block collection has several displayed parameters:",
                        "<ol>" +
                            "<li>Title</li>" +
                            "<li>Author</li>" +
                            "<li>Color</li>" +
                            "<li>Description</li>" +
                            "<li>Action button</li>" +
                        "</ol>",
                        "<b>Title</b> is not a unique block title.",
                        "<b>Author</b> is a unique nickname the author/name of the organization which created this block",
                        "<b>Color</b>  is a controversial technology to speed up block navigation. It`s task is that by the color of the dot you can quickly find exactly the block you need if 2-3 similar blocks appear in your collection",
                        "<b>Description</b> is a description of the unit. Typically, the description is written short and local so that the user can quickly understand what this block is for",
                        "<b>Action button</b> is a button for adding a block to a page",
                        "To add a new block, use the search (input bar at the top of the block collection) and click the add block button on the page"
                    ]
                },
                {
                    title: 'Edit block',
                    content: [
                        "Each Mirele block consists of editable content. That means you can change it on a frame block. You cannot change item positions, but you can change other values.",
                        "Let's prepare the block:",
                        "<img src='img/blocks.png' class='image'>",
                        "It follows from the picture above that in order to change the stacking of an element, you should modify the stacking in the field \"Value for element\"",
                        "Large blocks and elements are equipped with rich logic and a set of options that you can change.",
                        "To change the options for the entire block (for example, appearance animation), click the link \"Link for editing option of block,\" and to change the options for the element, you should point to the required element and click the link \"Link for editing option of element.\"",
                        "Note that not all blocks and elements can be provided with options and there will be no such references on some elements and blocks.",
                        "After each change you make, you must click on the \"Save block\" button, otherwise the changes on the page will not be saved.",
                        "You can also remove blocks by clicking the \"Remove block\" button.",
                        "If your blocks have become too many and you can 't navigate them, you can double-click on the block cap to roll it out. A double click on the closed block will open it. The blocks will remain collapsed before you close browser. After the browser reloads, all blocks are returned to the open state."
                    ]
                },
                {
                    title: 'Create WordPress page',
                    content: [
                        "Every page you create in the Rosemary Page Reader is not a WordPress page. Creating a page WordPress their Rosemary page is very easy. To do this, go to <u>\"Mirele Pages\"</u> and find the page you need in the table, then hover over the name of your page and click <u>\"Create WordPress Page\"</u> in the menu that appears"
                    ]
                },
                {
                    title: "Migration (Export/Import)",
                    content: [
                        "To export a set of blocks, just go to the desired page and click on the \"Export\" button (in the control unit)\n",
                        "After export approval in the modal menu, a block file is downloaded to your computer. You can import it to another page or to another site\n",
                        "To import a block, go to the desired Mirele page and select the \"Import\" button\n",
                        "After choosing the correct block file, you will be asked if you really want to import blocks (in the modal window you can see which blocks will be imported)\n",
                        "After successful import, your page will reload and you will see new blocks on your page\n"
                    ]
                },
                {
                    title: "Market",
                    content: [
                        "Mirele can install blocks from external GitHub repositories or ZIP files. By default, your Mirele is connected to the official Mirele repository, but you can add to the list of available repositories.",
                        "To install a new block, site, plugin or Mirele application, go to the <u>\"Block collection\"</u> and select the <u>\"Market\"</u> tab in the tabbed area.",
                        "By default, you 'll be in the app store. For Mirele owners, all items in this store are absolutely free.",
                        "You can use this store in the same way you use the plugin search engine in WordPress.",
                        "In the panel where the search string will be opened, you can find several tabs. To install the package by direct link, go to the <u>\"Install from URL\"</u> tab.",
                        "After that, a form will open for you with the ability to enter a URL link to the package. Enter the link and click on the <u>\"Install Now\"</u> button.",
                        "You should see a modal window that will have a message with information about the block and a request for confirmation of the installation, or a message with an error that your repository is not responding or the package is damaged.",
                        "If your link is valid, then in the modal window you will see the name of the package, its author and version. If all data is correct, confirm the installation. The system may also require a MIrele security password. Read about it in the article \"Account Mirele\".",
                        "If you get an error, then you should check the link for validity. Perhaps you accidentally added a space at the end of the link or you pressed Tab.",
                        "If your link is completely correct and you can open it in a browser, but the installer notifies you that the link is not valid - contact the creator of the package. Most likely the source code of his project is corrupted.",
                        "In addition to installing packages by reference, you can also install them from the zip archive. To do this, select the <u>\"Install from ZIP\"</u> tab in the menu already known to you. You will see a form that looks like a package installation form by URL link, but instead of an input field, you will see a field for selecting a file. Select the desired file by clicking on <u>\"Choose file\"</u> and wait for the archive to be unpacked.",
                        "If your archive is fully functional, you will receive a success message. But you can also get error messages. If the essence of the message says that you do not have a class installed for working with archives, you should contact your system administrator with a request to install a module on your server for working with the ZipArchive class for PHP. You can say the following words to him: <i> Hey, there you need to install a module on the server for working with archives, here is a link with solutions to Stack Overflow: <a href='https://stackoverflow.com/questions/3872555/fatal-error-class-ziparchive-not-found-in'>https://stackoverflow.com/questions/3872555/fatal-error-class-ziparchive-not-found-in</a></i>",
                        "If you have not received any messages at all after installation, then most likely the size of your archive exceeds the maximum file size that can be uploaded to your server. Ask your system administrator to compare the size of the maximum upload file to the server with the size of your archive. If the archive size is greater than the maximum limit, ask your system administrator to increase the maximum file limit. You can throw him a link to solutions with Stack Overflow: <a href='https://stackoverflow.com/questions/23432181/debian-php-max-file-upload'>https://stackoverflow.com/questions/23432181/debian-php-max-file-upload</a> or <a href='https://stackoverflow.com/search?q=max+upload+file+php'>https://stackoverflow.com/search?q=max+upload+file+php</a>",
                        "If you receive a message that tells you that the file type is not a ZIP file type, then you have selected the wrong file. Mirele only supports archive formats, such as .ZIP, .JAR, etc.",
                        "If you need to add a new Git repository to your product, then you should go to the \"Add new GIt\" tab. After going to this tab, you will have a table with your repositories. You can remove an extra repository by clicking on <u>\"Remove\"</u> (or <u>\"Delete\"</u>) on the right side of the repository. To add a new repository, paste the link of the form <a href='https://github.com/irtex-web/mirele.git'>https://github.com/irtex-web/mirele.git</a> into the form below the table and click <u>\"Add Now\"</u>. If you did everything correctly, then after reloading the page in the table, you will see a repository. Attention! The system may request a password from your Mirele account for security reasons. About your Mirele account, see the article <u>\"Mirele Account\"</u>",
                        "After adding a new repository, you can go to the \"Market\" and search for packages. You will notice that you have new blocks in your market. If they do not exist, then contact the administrator of the repository and ask if he has correctly marked out the file \"market.json\""
                    ]
                },
                {
                    title: "Choosing interface options",
                    content: [
                        "To export a set of blocks, just go to the desired page and click on the \"Export\" button (in the control unit)\n",
                        "After export approval in the modal menu, a block file is downloaded to your computer. You can import it to another page or to another site\n",
                        "To import a block, go to the desired Mirele page and select the \"Import\" button\n",
                        "After choosing the correct block file, you will be asked if you really want to import blocks (in the modal window you can see which blocks will be imported)\n",
                        "After successful import, your page will reload and you will see new blocks on your page\n"
                    ]
                },
                {
                    title: "WooCommerce",
                    content: [
                        "To export a set of blocks, just go to the desired page and click on the \"Export\" button (in the control unit)\n",
                        "After export approval in the modal menu, a block file is downloaded to your computer. You can import it to another page or to another site\n",
                        "To import a block, go to the desired Mirele page and select the \"Import\" button\n",
                        "After choosing the correct block file, you will be asked if you really want to import blocks (in the modal window you can see which blocks will be imported)\n",
                        "After successful import, your page will reload and you will see new blocks on your page\n"
                    ]
                }
            ],
            dev: [
                {
                    'title': 'Development block',
                    'content': [
                        "How are package files connected in Mirele? The system checks the templates folder, indexes all files, gives the code to the antivirus for verification, and if all the checks have been passed, the code is connected. There are also options for connecting HTML files, but read about it below, since this is a completely different block development technology.",
                        "Not all files in the folder will be included as templates. You need to have a comment in your code - Rosemary Template: Name;. So the system will understand that the template file is in the folder, and not a other PHP file.",
                        "As a result, your code should start as in the example below.",
                        "<!--?prettify lang=php linenums=true?--><pre class='prettyprint'><code class=\"lang-php\">&lt;?php\n" +
                        "\n" +
                        "/**\n" +
                        " * Rosemary Template: Name;\n" +
                        " * Type: Template;\n" +
                        " * Author: Mirele;\n" +
                        " * Version: 1.0.0;\n" +
                        " * Description: :);\n" +
                        " */\n" +
                        "\n" +
                        "rosemary_register('template_id', function ($event=null) {\n" +
                        "\n\t// Logic\n\n" +
                        "}, array(\n" +
                        "    'title' => 'Title block',\n" +
                        "    'description' => 'Description',\n" +
                        "    'author' => 'You Package'\n" +
                        "));</code></pre>",
                        "Remember that what you write in the comments in your block template files will be displayed when you install a block from the market, and the meta information that you pass to the function will be displayed to users as information about the block. This allows you to register more than 1 block in one file with different meta information.",
                        "This is how the main function for registering a template works:",
                        r_function (
                            [
                                {
                                    func: 'rosemary_register',
                                    desc: 'Registers a block and its executable code\n',
                                    params: [
                                        'id:any - ID of the template. On it he will be called',
                                        'function:function - The function that will be called when the template is on the page. The function should render content',
                                        'meta:array - meta information so that your template can be identified among others. This information is displayed in the block collection.'
                                    ],
                                    ret: 'void'
                                },

                            ]
                        ),
                        "Each block can have an unlimited number of options inside the block. They can be registered with the following function.",
                        "<!--?prettify lang=php linenums=true?-->\n<pre class='prettyprint'><code class=\"lang-php\">" +
                        "rosemary_register('template_id', function ($event=null) {\n\n" +
                        "    $options = rosemary_register_block_options (array (\n" +
                        "        'option' => 'default value'\n" +
                        "    ));\n\n" +
                        "}, array(\n" +
                        "    'title' => 'Title block',\n" +
                        "    'description' => 'Description',\n" +
                        "    'author' => 'You Package'\n" +
                        "));" +
                        "</code></pre>",
                        "<span id='register_options_of_block'></span>In the $options variable, you will get a set of options. If user has changed in the block editor, you will get the edited version of the option, not its default value.",
                        r_function (
                            [
                                {
                                    func: 'rosemary_register_block_options',
                                    desc: 'Registers options for the current block',
                                    params: [
                                        'options:array - array with options. Array key - option name, Array key value - default option value'
                                    ],
                                    ret: 'options in the object view, but they are already changed by the user.'
                                },

                            ]
                        ),
                        "<span id='package_manager'></span>Your block probably has CSS styles and third-party JavaScript scripts. To connect third-party packages to the block, you should use the Package Manager.",
                        "Mirele has a package manager. It was created specifically to connect external files and properly connect them to the system. The package manager caches all your connected data to reduce the number of requests to your servers and also speed up the loading of styles and scripts.",
                        "<!--?prettify lang=php linenums=true?-->\n<pre class='prettyprint'><code class=\"lang-php\">" +
                        "global $mpackage;\n" +
                        "\n" +
                        "$mpackage->register('template', array(\n\n" +
                        "\t'css' => [],\n" +
                        "\t'js' => []\n\n" +
                        "), 'template_id');\n\n" +
                        "rosemary_register('template_id', function ($event=null) {\n\n" +
                        "    $options = rosemary_register_block_options (array (\n" +
                        "        'option' => 'default value'\n" +
                        "    ));\n\n" +
                        "}, array(\n" +
                        "    'title' => 'Title block',\n" +
                        "    'description' => 'Description',\n" +
                        "    'author' => 'You Package'\n" +
                        "));" +
                        "</code></pre>",
                        "Files (CDN) must be specified as a list.\n",
                        "Note that the template ID in the rosemary_register function and the template ID in the $mpackage->register function are the same. They must be the same, since the package manager correlates the ID of the list of packages to connect with the ID of the template, and if they match, the manager connects the packages",
                        r_function (
                            [
                                {
                                    func: '<span id="mpackage">MPackage</span>',
                                    desc: 'Class for working with packages. Declarations on the $mpackage global variable',
                                    params: [
                                        "Does not have a constructor"
                                    ],
                                    ret: 'void'
                                },
                                {
                                    func: '<span id="mpackage__register">MPackage->register</span>',
                                    desc: 'Created to register data packets awaiting connection',
                                    params: [
                                        "package_type:string - the <a href='#type_of_rendering'>type of rendering</a> the package belongs to",
                                        "data:array - Packet Array",
                                        "id:string - ID of the block or component for which registration of packets in the system is required"
                                    ],
                                    ret: 'void'
                                },
                                {
                                    func: '<span id="mpackage__get">MPackage->get</span>',
                                    desc: 'Get a list of packages by type of packet data and component ID',
                                    params: [
                                        "package_type:string - the <a href='#type_of_rendering'>type of rendering</a> the package belongs to",
                                        "id:string - ID of the block or component for which registration of packets in the system is required"
                                    ],
                                    ret: 'void'
                                },

                            ]
                        ),
                    ]
                },
                {
                    'title': 'Development element',
                    'content': [
                        "Each block must have not only a static HTML code, but also dynamic elements - the user can edit them.",
                        "Each element is declared by the rre or rosemary_register_element function - both functions are identical",
                        "<!--?prettify lang=php linenums=true?-->\n<pre class='prettyprint'><code class=\"lang-php\">" +
                        "echo rre ('title', [\n" +
                        "    'type' => 'text',\n" +
                        "    'value' => 'Hello, Mirele!'\n" +
                        "], [\n" +
                        "    'color' => 'red',\n" +
                        "    'font-size' => '18px'\n" +
                        "]);" +
                        "</code></pre>",
                        r_function (
                            [
                                {
                                    func: 'rosemary_register_element',
                                    desc: 'Registers an item. The function is called inside the rosemary_register function. Have a child function rre',
                                    params: [
                                        'id:string - id for element',
                                        'data:array - array with data',
                                        'options:array - array with options',
                                    ],
                                    ret: 'string'
                                },

                            ]
                        ),
                        "Let's parse the \"data\" parameter.",
                        "This parameter expects an array as input. There should be only two keys in the array: <i>type</i> and <i>value</i>.",
                        "<i>value</i> - the default value of the item.",
                        "The key <i>type</i> may have several possible options:",
                        r_options ([
                            {
                                option: 'any',
                                desc: 'Accepts all data',
                                type: 'any'
                            },
                            {
                                option: 'text',
                                desc: 'The standard data type for blocks with text.',
                                type: 'text/html/shortcode/number'
                            },
                            {
                                option: 'number',
                                desc: 'You will get a number as an element value',
                                type: 'number'
                            },
                            {
                                option: 'src',
                                desc: 'You will get a ID of media element in WP lib.',
                                type: 'media select form'
                            },
                            {
                                option: 'html',
                                desc: 'The user can send you not only formatted text, but also a picture or table',
                                type: 'html'
                            },
                            {
                                option: 'shortcode',
                                desc: 'You will get the result of shortcode execution',
                                type: 'shortcode'
                            }
                        ], 'element_types_table'),
                        "What you register as primary data (the data parameter) is displayed in the block as a value, but if you need additional options for an element, you can register a set of options by passing an array of data to the options parameter.",
                        "To get item options, you should call the rosemary_get_options function.",
                        "<!--?prettify lang=php linenums=true?-->\n<pre class='prettyprint'><code class=\"lang-php\">" +
                        "rosemary_register('template_id', function ($event=null) {\n" +
                        "\n" +
                        "    echo rre ('up_title', [\n" +
                        "        'type' => 'text',\n" +
                        "        'value' => 'Hello, Mirele!'\n" +
                        "    ], [\n" +
                        "        'color' => 'green',\n" +
                        "        'font-size' => '12px'\n" +
                        "    ]);\n" +
                        "\n" +
                        "    echo rre ('title', [\n" +
                        "        'type' => 'text',\n" +
                        "        'value' => 'Hello, Mirele!'\n" +
                        "    ], [\n" +
                        "        'color' => 'red',\n" +
                        "        'font-size' => '18px'\n" +
                        "    ]);\n" +
                        "    \n" +
                        "    /** The function will receive options for the last registered item. That is, for title */\n" +
                        "    $options = rosemary_get_options();\n\n" +
                        "    /** The function will receive options for a specific element. That is, for \"up_title\" */\n" +
                        "    $options = rosemary_get_options(rosemary_get_full_id('up_title'));" +
                        "\n\n" +
                        "}, array(\n" +
                        "    'title' => 'Title block',\n" +
                        "    'description' => 'Description',\n" +
                        "    'author' => 'You Package'\n" +
                        "));" +
                        "</code></pre>",
                        r_function([
                            {
                                func: 'rosemary_get_options',
                                desc: 'The function will receive options for a specific element. If you do not pass the ID parameter, function will use recent element ',
                                params: [
                                    'id:string - full id for element'
                                ],
                                ret: 'object'
                            }
                        ]),
                        r_function([
                            {
                                func: 'rosemary_get_full_id',
                                desc: 'The function gets the full ID for the element. This ID must be passed to functions that require a full element ID',
                                params: [
                                    'id:string - id for element'
                                ],
                                ret: 'string'
                            }
                        ]),
                        "<span id='get_single_src'></span>If you need to get a link to the media element passed as an SRC parameter (you get exactly the ID for the element (list of elements with separators |), and not a link to it), you should pass the result of the rre function to the rosemary_get_single_image function.",
                        "The result of this function will be a link to the image / video",
                        "<!--?prettify lang=php linenums=true?-->\n<pre class='prettyprint'><code class=\"lang-php\">" +
                        "rosemary_register('template_id', function ($event=null) {\n" +
                        "\n" +
                        "    $url = rosemary_get_single_image(rre('img', [\n" +
                        "        'type' => 'src',\n" +
                        "        'value' => ''\n" +
                        "    ]));" +
                        "\n\n" +
                        "}, array(\n" +
                        "    'title' => 'Title block',\n" +
                        "    'description' => 'Description',\n" +
                        "    'author' => 'You Package'\n" +
                        "));" +
                        "</code></pre>",
                        r_function([
                            {
                                func: 'rosemary_get_single_image',
                                desc: 'The function gets the full ID for the element. This ID must be passed to functions that require a full element ID',
                                params: [
                                    'image:string - data returned by rre()'
                                ],
                                ret: 'string'
                            }
                        ])
                    ]
                },
                {
                    title: "Register your own option types",
                    content: [
                        "To make it easy for the user to edit options, you can create your own type of options. Remember that you must do registration of option types outside the block declaration." +
                        "<!--?prettify lang=php linenums=true?-->\n<pre class='prettyprint'><code class=\"lang-php\">" +
                        "rosemary_register_option('option', 'choice', [], 'title', 'description');\n\n" +
                        "rosemary_register('template_id', function ($event=null) {\n" +
                        "\n" +
                        "}, array(\n" +
                        "    'title' => 'Title block',\n" +
                        "    'description' => 'Description',\n" +
                        "    'author' => 'You Package'\n" +
                        "));" +
                        "</code></pre>",
                        r_function([
                            {
                                func: 'rosemary_register_option',
                                desc: 'Function registers a new option type',
                                params: [
                                    'option:string - id of option',
                                    'type:string - see table of available option types below',
                                    'available:array/function - available option values or function if option type is function.',
                                    'title:string - Option Display Name',
                                    'note:string - Function Description Displayed'
                                ],
                                ret: 'string'
                            }
                        ]),
                        r_options([
                            {
                                option: 'choice',
                                desc: "Displays a selection dialog from the transferred options. Variants should be enclosed in an array and have the form:<br>" +
                                    "<br>" +
                                    "a) [array ('title' => '', 'value' => '')]<br>" +
                                    "<br>" +
                                    "b) ['value']<br>" +
                                    "<br>" +
                                    "In the first case, the 'title' values ​​will be displayed as options shown to the user, and the 'value' values ​​will be used as the stored values",
                                type: 'array'
                            },
                            {
                                option: 'number',
                                desc: "Displays a field for entering a integer.",
                                type: 'none'
                            },
                            {
                                option: 'color',
                                desc: "Chose color",
                                type: 'none'
                            },
                            {
                                option: 'function',
                                desc: "You can pass a function to the argument \"avaiable\" with the field type \"function\". In this case, you will get the output of the function as a field for entering the value. The function can take an array from the \"option\" and \"value\" elements. The \"option\" element holds the current option. The \"value\" element stores the value of the option.",
                                type: 'function'
                            }
                        ], "available_option_data_types"),
                        "Example of registering an option with type \"function\":",
                        "<!--?prettify lang=php linenums=true?-->\n<pre class='prettyprint'><code class=\"lang-php\">" +
                        "rosemary_register_option('option', 'function', function ($option=array()) {\n" +
                        "    $option['option']; // Option name\n" +
                        "    $option['value']; // Value option" +
                        "\n}, 'title', 'description');\n\n" +
                        "rosemary_register('template_id', function ($event=null) {\n" +
                        "}, array(\n" +
                        "    'title' => 'Title block',\n" +
                        "    'description' => 'Description',\n" +
                        "    'author' => 'You Package'\n" +
                        "));" +
                        "</code></pre>",
                        "Mirele also has its standard options that are already registered:\n",
                        r_options([
                            {
                                option: 'color',
                                desc: 'Displays a color picker dialog. Powered by WordPress API (ColorPicker). Understands the names of the colors at the input (red, blue, orange and e.t.c)',
                                type: 'color code'
                            },
                            {
                                option: 'font',
                                desc: "Mirele has a collection of fonts (900+ fonts). You can let the user select a font from this collection. After choosing, you will need to connect the font using a special function",
                                type: 'font name'
                            },
                            {
                                option: 'icon',
                                desc: "You can provide a selection of icons for the user. As a result of the selection, you will get the FontAwesome class. You can use it without processing. Example: <i class = \"$option\"> </i>",
                                type: 'icon class'
                            }
                        ], "default_options"),
                    ]
                }
            ]
        }
    });

    PR.prettyPrint()

});