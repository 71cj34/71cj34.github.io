module Jekyll
    class RawFileTag < Liquid::Tag
      def initialize(tag_name, text, tokens)
        super
        @text = text.strip
      end
  
      def render(context)
        site = context.registers[:site]
        file_path = File.join(site.source, @text)
        if File.exist?(file_path)
          File.read(file_path)
        else
          "File not found: #{@text}"
        end
      end
    end
  end
  
  Liquid::Template.register_tag('raw_file', Jekyll::RawFileTag)
  