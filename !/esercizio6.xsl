<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <xsl:template match="/*">
        <html>
            <body>
               Bibliografia:
               <ol>
                    <xsl:apply-templates select="voce"/>
               </ol> 
            </body>
        </html>
    </xsl:template>

    <xsl:template match="voce">
        <li>
            <xsl:value-of select="tipoPub"/>:
            <ul>
                <xsl:apply-templates select="*"/>
            </ul>
        </li>
    </xsl:template>

    <xsl:template match="autori">
        <li>Autori:
            <ol>
                <xsl:for-each select="autore">
                    <li>
                        <xsl:value-of select="."/>
                    </li>
                </xsl:for-each>
            </ol>
        </li>
    </xsl:template>

    <xsl:template match="titolo">
        <li>Titolo:
            <xsl:value-of select="."/>
        </li>
    </xsl:template>

    <xsl:template match="data">
        <li>Data:
            <xsl:value-of select="giorno"/>/<xsl:value-of select="mese"/>/<xsl:value-of select="anno"/>
        </li>
    </xsl:template>

    <xsl:template match="text()"/>
</xsl:stylesheet>