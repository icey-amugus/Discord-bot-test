const randomPuppy = require('random-puppy');
const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder().setName("meme").setDescription("if it dosent load its a video"),
    run: async (client, interaction) => {
        const subReddits = ["memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new MessageEmbed()

          
                     .setTitle("If it dosent load its a video **MEMES**")
                     .setColor('RANDOM')
                     .setImage(img)
                  
           interaction.editReply({ embeds: [embed] }).catch((e) => interaction.followUp(e))
        }};