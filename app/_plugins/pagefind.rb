# frozen_string_literal: true

require 'jekyll'

module Jekyll
  # class Jekyll::PagefindGenerator
  class PagefindGenerator < Jekyll::Generator
    safe true
    priority :lowest

    def generate(site)
        Jekyll::Hooks.register :site, :post_write do |_site|
          command = './_bin/pagefind --site _site'
          puts "Running: #{command}"
          system(command)
        end
    end
  end
end