const path = require('path')
const typescriptPropsParser = require('react-docgen-typescript').withDefaultConfig(
  {
    propFilter: prop => {
      if (prop.parent == null) {
        return true
      }

      return prop.parent.fileName.indexOf('node_modules/@types/react') < 0
    },
  }
).parse

module.exports = {
  assetsDir: 'static',
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true,
    },
  },
  ignore: ['**/index.tsx', '**/*.test.tsx'],
  pagePerSection: true,
  propsParser: typescriptPropsParser,
  showCode: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide_components/ThemeWrapper'),
  },
  require: [
    'chroma-js',
    path.join(__dirname, 'styleguide_components/ThemeProvider'),
    path.join(__dirname, '/static/css/style-guide.css'),
  ],
  sections: [
    {
      name: '',
      content: 'src/documentation/intro.md',
    },
    {
      name: 'Working with Lens',
      sections: [
        {
          name: 'Code Quality and IDE Setup',
          content: 'src/documentation/working_with_lens/ide_setup.md',
        },
        {
          name: 'Integrating Lens into Helltool',
          content:
            'src/documentation/working_with_lens/integrating_lens_into_helltool.md',
        },
      ],
    },
    {
      name: 'Principles',
      sections: [
        {
          name: 'Accessibility',
          content: 'src/documentation/principles/accessibility.md',
        },
        {
          name: 'Support Levels',
          content: 'src/documentation/principles/support_levels.md',
        },
      ],
    },
    {
      name: 'Style',
      sections: [
        {
          name: 'Breakpoints',
          content: 'src/documentation/style/Breakpoints.md',
        },
        {
          name: 'Color',
          content: 'src/documentation/style/Color.md',
        },
        {
          name: 'Typography',
          content: 'src/documentation/style/Typography.md',
        },
        {
          name: 'Spacing',
          content: 'src/documentation/style/Spacing.md',
        },
        {
          name: 'Borders & Dividers',
          content: 'src/documentation/style/Borders.md',
        },
      ],
    },
    {
      name: 'Components',
      components: 'src/components/**/*.tsx',
    },
    {
      name: 'Icons',
      components: 'src/icons/components/*.tsx',
      content: 'src/icons/components/ALL_ICONS.md',
    },
  ],
  title: 'Lens',
  webpackConfig: {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: require.resolve('ts-loader'),
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /.scss$/,
          include: path.resolve(__dirname, '../'),
          use: [
            'style-loader',
            {
              loader: 'typings-for-css-modules-loader',
              options: {
                camelCase: true,
                modules: true,
                namedExport: true,
                importLoaders: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader?classPrefix',
        },
      ],
    },
  },
  template: {
    favicon: 'favicon.ico',
  },
  theme: {
    fontFamily: {
      base: '"Open Sans", sans-serif',
    },
  },
  styles: {
    Logo: {
      logo: {
        backgroundImage: 'url(/img/lens-logo.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20px',
        backgroundPosition: 'left',
        textIndent: '1.8rem',
        fontFamily: '"Open Sans", sans-serif',
        fontSize: '19px',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        color: '#3C4345',
      },
    },
    Para: {
      para: {
        maxWidth: '765px',
      },
    },
    Blockquote: {
      blockquote: {
        borderLeft: '4px solid #F4F6F7',
        paddingLeft: '16px',
      },
    },
    Code: {
      code: {
        color: '#4C33AA',
        padding: '2px 4px',
        borderRadius: '4px',
        background: '#F6F6F7  ',
      },
    },
    Playground: {
      preview: {
        backgroundColor: '#F2F2F9',
        border: 'none',
        borderRadius: '6px',
      },
    },
    Typography: {
      heading1: {
        fontSize: '52px',
      },
    },
    Table: {
      tableHead: {},
      cellHeading: {
        '&:nth-child(2)': {
          width: '55%',
        },
      },
    },
    Heading: {
      heading1: {
        fontSize: '46px',
        lineHeight: '64px',
      },
      heading2: {
        fontSize: '46px',
        lineHeight: '64px',
      },
      heading3: {
        fontSize: '25px',
        lineHeight: '40px',
        fontWeight: 600,
      },
      heading4: {
        fontSize: '22px',
        lineHeight: '32px',
        margin: '40px 0 0',
        fontWeight: 600,
      },
      heading5: {
        fontSize: '16px',
        lineHeight: '28px',
        fontWeight: 600,
      },
    },
    StyleGuide: {
      '@global body': {
        fontFamily: '"Open Sans", sans-serif',
      },
      hasSidebar: {
        paddingLeft: '300px',
      },
      sidebar: {
        width: '300px',
        background: '#F4F6F7',
        padding: '0 12px',
      },
    },
  },
  editorConfig: {
    theme: 'oceanic-next',
  },
}
