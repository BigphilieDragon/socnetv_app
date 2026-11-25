<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1">
<context>
    <name>DialogBulkEdit</name>
    <message>
        <location filename="../src/forms/dialogbulkedit.ui" line="20"/>
        <source>Set Property for Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.ui" line="34"/>
        <source>Apply to selected items.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.ui" line="53"/>
        <source>Property:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.ui" line="72"/>
        <source>Value:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.ui" line="97"/>
        <source>Enter value...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.ui" line="163"/>
        <source>Select color...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.cpp" line="44"/>
        <source>nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.cpp" line="44"/>
        <source>edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.cpp" line="45"/>
        <source>visible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.cpp" line="45"/>
        <source>selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.cpp" line="47"/>
        <source>Apply to %1 %2 %3:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.cpp" line="58"/>
        <location filename="../src/forms/dialogbulkedit.cpp" line="63"/>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.cpp" line="59"/>
        <source>Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.cpp" line="60"/>
        <location filename="../src/forms/dialogbulkedit.cpp" line="65"/>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.cpp" line="61"/>
        <source>Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.cpp" line="64"/>
        <source>Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogbulkedit.cpp" line="139"/>
        <source>Select color</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogCentralityBonacich</name>
    <message>
        <location filename="../src/forms/dialogcentralitybonacich.ui" line="20"/>
        <source>Bonacich Power Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitybonacich.ui" line="26"/>
        <source>Bonacich Power Centrality gives each actor credit for indirect connections, discounted by distance like Katz Centrality - but beta below can be negative, in which case being tied to well-connected others can hurt rather than help a node&apos;s score. alpha is a free overall scale factor and does not change the ranking, only the numbers&apos; size.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitybonacich.ui" line="41"/>
        <source>Alpha:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitybonacich.ui" line="67"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;A free overall scale factor - it does not affect convergence, only the size of the resulting scores.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitybonacich.ui" line="70"/>
        <source>Overall scale factor. Does not change the ranking, only the numbers&apos; size.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitybonacich.ui" line="99"/>
        <source>Beta:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitybonacich.ui" line="125"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Must satisfy |beta| &amp;lt; 1 / (the network&apos;s largest eigenvalue), or the computation will not converge - the report will explain if your value is too large. May be negative.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitybonacich.ui" line="128"/>
        <source>Attenuation factor. May be negative, flipping whether connections to well-connected others help or hurt.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitybonacich.ui" line="155"/>
        <source>Beta must be smaller in absolute value than 1 / (the network&apos;s largest eigenvalue). If it&apos;s too large, the report will show all-zero scores and explain why in the status bar. With negative beta, scores can come out negative - that is expected, not an error.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitybonacich.cpp" line="52"/>
        <source>Beta must be smaller in absolute value than %1 (1 / this network&apos;s largest eigenvalue) - the spinbox above already enforces this. With negative beta, scores can come out negative - that is expected, not an error.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitybonacich.cpp" line="59"/>
        <source>This network has no such bound on beta - any value converges. With negative beta, scores can come out negative - that is expected, not an error.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogCentralityKatz</name>
    <message>
        <location filename="../src/forms/dialogcentralitykatz.ui" line="20"/>
        <source>Katz Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitykatz.ui" line="26"/>
        <source>Katz Centrality gives each actor credit for indirect connections, discounted the further away they are by the attenuation factor alpha below (a direct tie counts full price, a 2-hop tie counts alpha times as much, and so on).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitykatz.ui" line="41"/>
        <source>Alpha:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitykatz.ui" line="67"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Must be smaller than 1 / (the network&apos;s largest eigenvalue), or the computation will not converge - the report will explain if your value is too large.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitykatz.ui" line="70"/>
        <source>Attenuation factor. Larger values give more weight to distant connections.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitykatz.ui" line="97"/>
        <source>Must be smaller than 1 / (the network&apos;s largest eigenvalue). If it&apos;s too large, the report will show all-zero scores and explain why in the status bar.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitykatz.cpp" line="45"/>
        <source>Must be smaller than %1 (1 / this network&apos;s largest eigenvalue) - the spinbox above already enforces this.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitykatz.cpp" line="51"/>
        <source>This network has no such bound - any alpha value converges.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogCentralityPN</name>
    <message>
        <location filename="../src/forms/dialogcentralitypn.ui" line="20"/>
        <source>PN Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitypn.ui" line="26"/>
        <source>PN Centrality is built for signed networks: it is worse to receive a negative tie from someone who is highly popular (has a lot of positive ties) than from someone who is marginalized - a negative tie from someone universally disliked can even read as a positive signal. Ties are considered by sign only (positive/negative); tie strength is not used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitypn.ui" line="39"/>
        <source>Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitypn.ui" line="46"/>
        <source>All (undirected networks only)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitypn.ui" line="49"/>
        <source>Ties are treated as undirected. Only valid on an undirected network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitypn.ui" line="56"/>
        <source>Out (directed networks only) - based on ties this actor sends</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitypn.ui" line="59"/>
        <location filename="../src/forms/dialogcentralitypn.ui" line="69"/>
        <source>Only valid on a directed network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitypn.ui" line="66"/>
        <source>In (directed networks only) - based on ties this actor receives</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitypn.cpp" line="30"/>
        <source>This network is directed - &quot;All&quot; is disabled; pick Out or In.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogcentralitypn.cpp" line="38"/>
        <source>This network is undirected - only &quot;All&quot; is valid.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogClusteringHierarchical</name>
    <message>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="35"/>
        <source>Hierarchical Clustering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="49"/>
        <source>Variables in:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="65"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Rows: &lt;/span&gt;Correlate outbound ties (or distances, depending on the selected matrix above) between pairs of actors.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Columns: &lt;/span&gt;Correlate inbound ties (or distances, depending on the selected matrix above) between pairs of actors.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Both: &lt;/span&gt;Correlate both outbound and inbound ties (or distances, depending on the selected matrix above) between pairs of actors. In this case, the input matrix is expanded by listing row vectors followed by column vectors. This is useful only when you have directed data.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="74"/>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="231"/>
        <source>Enable to include matrix diagonal in calculations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="77"/>
        <source>Print dendrogram (avoid in large nets)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="109"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Agglomerative hierarchical clustering builds a hierarchy of actor clusters, based on their tie/distance dissimilarity, starting with single elements and aggregating them into clusters.&lt;/p&gt;&lt;p&gt;It takes a matrix (adjacency or geodesic distances) and a distance metric between actors as input and constructs a pair-wise dissimilarity matrix. &lt;/p&gt;&lt;p&gt;Initially, each actor starts in its own cluster (Level 0). In each subsequent Level, the pair of clusters with minimum distance are merged into a larger cluster. Then, the distance between the new cluster and the old ones is computed, using the specified clustering method (i.e. single-linkage clustering).  The process is repeated until all actors end up in the same cluster. &lt;/p&gt;&lt;p&gt;Select an input matrix, a distance/dissimilarity metric and a clustering method (criterion) for the hierarchical cluster analysis. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="130"/>
        <source>Clustering method (criterion):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="146"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Supported linkage criteria for agglomerative hierarchical clustering: &lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Single-linkage (minimum)&lt;/span&gt;: The distance between two clusters will be determined by a single element pair, namely those two elements (one in each cluster) that have the shortest distance between them. In each step, the clusters that have the shortest distance will be merged. &lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Complete-linkage (maximum)&lt;/span&gt;: The distance between two clusters will be determined by any two elements (one in each cluster) that have the longest distance between them. &lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Average-linkage (UPGMA)&lt;/span&gt;: The distance between two clusters A and B is equal to the average of distances between all pairs of elements in A and B. &lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="173"/>
        <source>Input matrix:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="189"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Adjacency:&lt;/span&gt; Use the active network&apos;s adjacency matrix as input to hierarchical clustering.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Distances:&lt;/span&gt; Use the active network&apos;s geodedic distances matrix as input. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="206"/>
        <source>Distance/dissimilarity metric:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="222"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Supported distance metrics for hierarchical clustering:&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Euclidean distance&lt;/span&gt;: The square root of the sum of squared differences between tie/distance profiles.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Jaccard distance&lt;/span&gt;: The Jaccard index J is the ratio of same ties/distances reported by each pair of actors to the total number of their ties. Does not count absent ties. The Jaccard distance is 1 - J&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Hamming distance&lt;/span&gt;: The number of ties/distances to other actors which differ between each pair of actors.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Manhattan distance&lt;/span&gt;: The sum of absolute differences between tie/distance profiles.&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogclusteringhierarchical.ui" line="234"/>
        <source>Include input matrix diagonal</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogDataSetSelect</name>
    <message>
        <location filename="../src/forms/dialogdatasetselect.ui" line="35"/>
        <source>Famous SNA data sets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdatasetselect.ui" line="47"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Automatically recreate and visualize known data sets of Social Network Analysis, such as Padgett&apos;s Florentine families, Zachary&apos;s Karate Club, Knoke&apos;s Bureaucracies, etc.&lt;/p&gt;&lt;p&gt;Select the data set you want to re-create from the list.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdatasetselect.ui" line="71"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Click to select a data set&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogDissimilarities</name>
    <message>
        <location filename="../src/forms/dialogdissimilarities.ui" line="35"/>
        <source>Tie profile dissimilarities</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdissimilarities.ui" line="53"/>
        <source>Distance metric:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdissimilarities.ui" line="69"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Select a matching method. &lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Exact Matches&lt;/span&gt;: Examines pairs of actors for exact tie or distance matches (present or absent) to other actors and returns a proportion to their overall ties. &lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Positive Matches (Jaccard/Co-citation)&lt;/span&gt;: Looks for same ties/distances reported by both actors. Returns the ratio to the total number of ties reported.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Hamming distance&lt;/span&gt;: Reports the number of ties/distances to other actors which differ between each pair of actors.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Cosine similarity&lt;/span&gt;: Computes the pair-wise similarity of actors as the dot product of their tie/distance vectors divided by the magnitude of these vectors. &lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdissimilarities.ui" line="90"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Compute a &lt;span style=&quot; font-weight:600;&quot;&gt;dissimilarities matrix&lt;/span&gt;, where each element (i,j) is the pair-wise distance / dissimilarity of actors i and j tie profiles to all other actors, according to a selected metric. &lt;/p&gt;&lt;p&gt;Select a distance metric. For example, the &amp;quot;Euclidean distance&amp;quot; is the square root of the sum of the squared differences of tie values that actors i and j have to other actors. Hover over &amp;quot;Distance Metric&amp;quot; select box for more info on each metric.&lt;/p&gt;&lt;p&gt;Also, specify where the &amp;quot;variables&amp;quot; are. For instance, select Rows to measure the outbound ties between all pairs of actors.  Select Both to measure both inbound and outbound ties. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdissimilarities.ui" line="105"/>
        <source>Variables in:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdissimilarities.ui" line="121"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Rows: &lt;/span&gt;Correlate outbound ties (or distances, depending on the selected matrix above) between pairs of actors.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Columns: &lt;/span&gt;Correlate inbound ties (or distances, depending on the selected matrix above) between pairs of actors.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Both: &lt;/span&gt; Correlate both outbound and inbound ties (or distances, depending on the selected matrix above) between pairs of actors.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdissimilarities.ui" line="148"/>
        <source>Enable to include matrix diagonal in calculations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdissimilarities.ui" line="151"/>
        <source>Include input matrix diagonal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdissimilarities.cpp" line="34"/>
        <source>Euclidean distance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdissimilarities.cpp" line="35"/>
        <source>Manhattan distance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdissimilarities.cpp" line="36"/>
        <source>Hamming distance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdissimilarities.cpp" line="37"/>
        <source>Jaccard distance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogdissimilarities.cpp" line="38"/>
        <source>Chebyshev distance</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogEdgeDichotomization</name>
    <message>
        <location filename="../src/forms/dialogedgedichotomization.ui" line="20"/>
        <source>Dichotomize Edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgedichotomization.ui" line="32"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a threshold value to dichotomize the edges of a valued network, in order to create a new binary relation.  All ties with equal or higher values will be set to 1, and all lower will be removed. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgedichotomization.ui" line="59"/>
        <source>Weight Threshold</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogEdgeEdit</name>
    <message>
        <location filename="../src/forms/dialogedgeedit.ui" line="20"/>
        <source>Edge Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgeedit.ui" line="34"/>
        <source>Edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgeedit.ui" line="45"/>
        <source>Label:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgeedit.ui" line="61"/>
        <source>Weight:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgeedit.ui" line="106"/>
        <source>Color (click to change):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgeedit.ui" line="132"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgeedit.ui" line="149"/>
        <source>Custom Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgeedit.ui" line="167"/>
        <location filename="../src/forms/dialogedgeedit.ui" line="184"/>
        <source>Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgeedit.ui" line="172"/>
        <location filename="../src/forms/dialogedgeedit.ui" line="194"/>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgeedit.ui" line="204"/>
        <source>Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgeedit.ui" line="223"/>
        <source>Remove selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgeedit.cpp" line="48"/>
        <source>Edge %1 → %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogedgeedit.cpp" line="94"/>
        <source>Select edge color</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogExportImage</name>
    <message>
        <location filename="../src/forms/dialogexportimage.ui" line="20"/>
        <source>Export to Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportimage.ui" line="28"/>
        <source>Save to file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportimage.ui" line="54"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Image filename&lt;/span&gt;&lt;/p&gt;&lt;p&gt;The path and the filename of the resulting image. &lt;/p&gt;&lt;p&gt;Click the button on the right to select a new filename.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportimage.ui" line="76"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-size:10pt; font-weight:600;&quot;&gt;Image filename&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-size:10pt;&quot;&gt;Click this button to select the path and the filename of the resulting image.&lt;br/&gt;&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportimage.ui" line="79"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;PDF filename&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select the path and the filename of the PDF. &lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportimage.ui" line="82"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportimage.ui" line="93"/>
        <source>Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportimage.ui" line="136"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Ubuntu&apos;; font-size:11pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt; font-weight:600;&quot;&gt;Image format &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;Select the format of the resulting image. &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;SocNetV automatically supports all image formats supported currently by Qt in your computer platform. &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;Click on this drop down to see all supported image formats and select a format for your image.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportimage.ui" line="157"/>
        <source>Quality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportimage.ui" line="216"/>
        <source>Compression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportimage.cpp" line="126"/>
        <source>Save to image</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogExportPDF</name>
    <message>
        <location filename="../src/forms/dialogexportpdf.ui" line="20"/>
        <source>Export to PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportpdf.ui" line="28"/>
        <source>Page Orientation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportpdf.ui" line="65"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Ubuntu&apos;; font-size:11pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt; font-weight:600;&quot;&gt;Page Orientation&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;Select the page orientation in the PDF: Portrait or landscape. &lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportpdf.ui" line="82"/>
        <source>Save to file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportpdf.ui" line="108"/>
        <location filename="../src/forms/dialogexportpdf.ui" line="111"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;PDF filename&lt;/span&gt;&lt;/p&gt;&lt;p&gt;The path and the filename of the PDF. &lt;/p&gt;&lt;p&gt;Click the button on the right to select a new filename.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportpdf.ui" line="121"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-size:10pt; font-weight:600;&quot;&gt;PDF filename&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-size:10pt;&quot;&gt;Click this button to select the path and the filename of the PDF. &lt;br/&gt;&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportpdf.ui" line="124"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;PDF filename&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select the path and the filename of the PDF. &lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportpdf.ui" line="127"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportpdf.ui" line="138"/>
        <source>Quality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportpdf.ui" line="175"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Ubuntu&apos;; font-size:11pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt; font-weight:600;&quot;&gt;PDF Quality&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;Select the quality of the PDF. &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;The default value is Screen, which results in a PDF exactly like what you see on the application canvas.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt; text-decoration: underline;&quot;&gt;Screen&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt; font-weight:600;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;Sets the resolution of the print device to the screen resolution. This has the big advantage that the results obtained when painting on the printer will match more or less exactly the visible output on the screen. It is the easiest to use, as font metrics on the screen and on the printer are the same. This is the default value.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt; text-decoration: underline;&quot;&gt;Print&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;On Windows, sets the printer resolution to that defined for the printer in use. For PDF printing, sets the resolution of the PDF driver to 1200 dpi.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportpdf.ui" line="213"/>
        <source>Resolution (DPI)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportpdf.ui" line="250"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Ubuntu&apos;; font-size:11pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt; font-weight:600;&quot;&gt;DPI&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;Select the PDF resolution in DPI.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;The default value is 75, to match screen resolution.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportpdf.cpp" line="119"/>
        <source>Save to pdf</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogexportpdf.cpp" line="121"/>
        <source>PDF (*.pdf)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogFilterByAttribute</name>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="20"/>
        <source>Filter by Attribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="34"/>
        <source>Show only nodes or edges whose custom attribute matches the condition below. Non-matching elements are hidden (reversible).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="46"/>
        <source>Scope</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="52"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="62"/>
        <source>Edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="69"/>
        <source>Both</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="91"/>
        <source>Condition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="98"/>
        <source>Key:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="113"/>
        <source>Select an attribute key or type a custom one.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="119"/>
        <source>Operator:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="127"/>
        <source>= (equals)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="128"/>
        <source>≠ (not equals)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="129"/>
        <source>&gt; (greater than)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="130"/>
        <source>&lt; (less than)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="131"/>
        <source>≥ (greater or equal)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="132"/>
        <source>≤ (less or equal)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="133"/>
        <source>contains</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="138"/>
        <source>Value:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="147"/>
        <source>Enter value…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="161"/>
        <source>Use Query Builder…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilterbyattribute.ui" line="167"/>
        <source>Open the Query Builder to filter by multiple conditions combined with AND logic.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogFilterEdgesByWeight</name>
    <message>
        <location filename="../src/forms/dialogfilteredgesbyweight.ui" line="20"/>
        <source>Filter Edges by Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilteredgesbyweight.ui" line="26"/>
        <source>Select a weight threshold and choose which edges to hide. Hidden edges are not deleted — use Restore All Edges to show them again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilteredgesbyweight.ui" line="53"/>
        <source>Weight Threshold:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilteredgesbyweight.ui" line="84"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter the weight threshold. Edges above or below this value will be hidden depending on the selected option below.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilteredgesbyweight.ui" line="87"/>
        <source>Enter the weight threshold. Edges will be hidden based on the option selected below.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilteredgesbyweight.ui" line="107"/>
        <source>Select behaviour:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilteredgesbyweight.ui" line="114"/>
        <source>Hide edges with weight below the threshold  (keep edges with weight ≥ threshold)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilteredgesbyweight.ui" line="121"/>
        <source>Hide edges with weight above the threshold  (keep edges with weight ≤ threshold)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogFilterNodesByCentrality</name>
    <message>
        <location filename="../src/forms/dialogfilternodesbycentrality.ui" line="20"/>
        <source>Filter nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilternodesbycentrality.ui" line="40"/>
        <source>Raw Score Threshold:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilternodesbycentrality.ui" line="71"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter the score threshold used for hiding nodes.&lt;br/&gt;Use the options below to hide nodes with scores &lt;span style=&quot; font-weight:700;&quot;&gt;≥&lt;/span&gt; or &lt;span style=&quot; font-weight:700;&quot;&gt;≤&lt;/span&gt; the threshold.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilternodesbycentrality.ui" line="74"/>
        <source>Enter the threshold to use while filtering. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilternodesbycentrality.ui" line="97"/>
        <source>Index:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilternodesbycentrality.ui" line="143"/>
        <source>This does not delete nodes; it only hides them in the current view. To restore hidden nodes, use Edit → Filter Nodes → Restore All Nodes. If you save the network while nodes are hidden, only the visible nodes and their edges will be saved.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilternodesbycentrality.ui" line="155"/>
        <source>Select behaviour:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilternodesbycentrality.ui" line="162"/>
        <source>Hide nodes with scores ≥ threshold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilternodesbycentrality.ui" line="169"/>
        <source>Hide nodes with scores ≤ threshold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilternodesbycentrality.ui" line="178"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Hide nodes based on their raw (non-standardized) centrality or prestige score.&lt;/p&gt;&lt;p&gt;Choose an index and a score threshold, then choose whether to hide nodes with scores ≥ the threshold or ≤ the threshold.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Note: Indices must be computed before they can be used for filtering. The threshold applies to the raw score, not the standardized (%) value. Edges connected to hidden nodes will also be hidden.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogfilternodesbycentrality.cpp" line="52"/>
        <source>Not computed yet. Run the analysis first.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogImportAttributes</name>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="35"/>
        <source>Node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="35"/>
        <source>Edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="36"/>
        <location filename="../src/forms/dialogimportattributes.cpp" line="154"/>
        <source>CSV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="36"/>
        <location filename="../src/forms/dialogimportattributes.cpp" line="154"/>
        <source>JSON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="38"/>
        <source>Import %1 Attributes from %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="44"/>
        <source>No file selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="48"/>
        <source>Browse…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="49"/>
        <source>Choose a %1 file to import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="55"/>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="69"/>
        <source>Preview (first %1 rows)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="76"/>
        <source>Column mapping</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="81"/>
        <source>Column used to identify each node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="83"/>
        <source>Node number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="84"/>
        <source>Node label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="92"/>
        <source>ID column:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="93"/>
        <source>Match by:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="96"/>
        <source>All other columns will be imported as node attributes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="101"/>
        <source>Column containing the source node number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="103"/>
        <source>Column containing the target node number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="105"/>
        <source>Source column:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="106"/>
        <source>Target column:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="109"/>
        <source>All other columns will be imported as edge attributes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="119"/>
        <source>Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="149"/>
        <source>CSV files (*.csv *.txt);;All files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="150"/>
        <source>JSON files (*.json);;All files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="154"/>
        <source>Open %1 file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogimportattributes.cpp" line="179"/>
        <source>Import error</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogNodeEdit</name>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="20"/>
        <source>Node Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="51"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Background image&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click the button on the right to select a new background image.&lt;/p&gt;&lt;p&gt;If the file does not exist, the default background color will be used.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="54"/>
        <source>Custom Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="86"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Custom Icon &lt;/span&gt;&lt;/p&gt;&lt;p&gt;This box only shows the path of the selected custom icon file for all network nodes. If it is empty, it means you have not selected any image yet.&lt;/p&gt;&lt;p&gt;Click the button on the right to select a new image to be used as custom icon in all the nodes of the network.&lt;/p&gt;&lt;p&gt;Valid icons are images: JPG, PNG, JPEG, SVG etc.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="89"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Background image&lt;/span&gt;&lt;/p&gt;&lt;p&gt;This is the path of the default background image. &lt;/p&gt;&lt;p&gt;Click the button on the right to select a new background image.&lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. If the file does not exist, the default background color will be used.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="108"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Custom Icon &lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select a new custom icon for all nodes of the network. &lt;/p&gt;&lt;p&gt;Valid icons are images: JPG, PNG, JPEG, SVG etc.&lt;/p&gt;&lt;p&gt;If you don&apos;t select an image file, you must select one of the default shapes from the Node Shape menu above. &lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="111"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Background image&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select a new background image.&lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. If the file does not exist, the default background color will be used.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="114"/>
        <location filename="../src/forms/dialognodeedit.ui" line="403"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="123"/>
        <source>Custom attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="155"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Click to remove the selected key-value attribute (you should have already clicked one!).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="158"/>
        <source>Remove selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="194"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter the key of the attribute, i.e. age or birthdate.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="197"/>
        <source>Enter key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="210"/>
        <source>New Attribute:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="229"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter the value of this attribute. &lt;/p&gt;&lt;p&gt;For example, if the key is &apos;age&apos;, then the value might be a number like 19. &lt;/p&gt;&lt;p&gt;Note: The value supports ISO&#xa0;8601 dates, i.e. 2011-10-05T14:48:00.000Z&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="232"/>
        <source>Enter value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="242"/>
        <source>Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="257"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Shows the current custom attributes (metadata) of the node. Custom attributes are key-value pairs. &lt;/p&gt;&lt;p&gt;For example. you could add demographics, work years, age, time events, etc. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="288"/>
        <source>Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="293"/>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="306"/>
        <source>Node shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="347"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Select a node shape. &lt;/p&gt;&lt;p&gt;If you select &amp;quot;Icon&amp;quot; then you must click on the custom icon button (below) to select the desired icon file from your filesystem. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="371"/>
        <source>Node color (click the button to select)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="420"/>
        <source>Node size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="452"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Set the size of the node. &lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;Default node size: 8&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="466"/>
        <source>Node label </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.ui" line="498"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a node label. &lt;/p&gt;&lt;p&gt;If multiple nodes are selected, the label you define here will be set to all of them, along with a numerical suffix, i.e. if you enter &amp;quot;Jim&amp;quot;, then the selected actors will be labeled &amp;quot;Jim1&amp;quot;, &amp;quot;Jim2&amp;quot;, &amp;quot;Jim3&amp;quot; and so on. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.cpp" line="266"/>
        <source>Select a new icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.cpp" line="268"/>
        <source>Images (*.png *.jpg *.jpeg *.svg);;All (*.*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodeedit.cpp" line="366"/>
        <source>Select node color</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogNodeFind</name>
    <message>
        <location filename="../src/forms/dialognodefind.ui" line="20"/>
        <source>Find nodes (and select them)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodefind.ui" line="44"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Find and select nodes (by numbers, labels or index score)&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;To find nodes by their number, enter numbers either comma-separated or line by line or array &lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;i.e. 1,2,3 or 1-10) &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;To find nodes by their label enter words either comma separated or line by line &lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;i.e. jim,julia&lt;/span&gt; &lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;To find and select nodes by their index score, enter the desired score in the form: &lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;&amp;gt; threshold&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;or &lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;&amp;lt; threshold&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;and select the index in the menu below&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodefind.ui" line="67"/>
        <source>By Number(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodefind.ui" line="74"/>
        <source>By Label(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodefind.ui" line="81"/>
        <source>By Index Score</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodefind.ui" line="103"/>
        <source>Search for these numbers (enter line by line or csv):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodefind.ui" line="122"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Select how to search nodes (by their number, by their label, or by index score) and enter below what you want to find. Matched nodes will be highlighted.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialognodefind.ui" line="169"/>
        <source>Index</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogPreviewFile</name>
    <message>
        <location filename="../src/forms/dialogpreviewfile.cpp" line="28"/>
        <source>&amp;Encoding:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogpreviewfile.cpp" line="33"/>
        <source>&lt;p&gt;In this area you can preview your text file before actually loading it.&lt;/p&gt; &lt;p&gt;SocNetV uses UTF-8 for saving and loading network files, by default. &lt;/p&gt;&lt;p&gt;If your file is encoded in another encoding, select the correct encoding from the menu and see if strings appear correctly.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogpreviewfile.cpp" line="58"/>
        <source>Preview file &amp; Choose Encoding</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogQueryBuilder</name>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="35"/>
        <source>Query Builder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="45"/>
        <source>Build a multi-condition filter for nodes or edges. All conditions are combined with AND logic — elements not matching every condition are hidden (reversible).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="53"/>
        <source>Scope</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="55"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="56"/>
        <source>Edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="64"/>
        <source>Conditions  (ALL must match)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="79"/>
        <source>+ Add condition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="114"/>
        <source>=</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="114"/>
        <source>≠</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="114"/>
        <source>&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="114"/>
        <source>&lt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="114"/>
        <source>≥</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="114"/>
        <source>≤</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="114"/>
        <source>contains</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="117"/>
        <source>value…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="119"/>
        <source>−</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogquerybuilder.cpp" line="122"/>
        <source>Remove this condition</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogRandErdosRenyi</name>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="26"/>
        <source>Erdős–Rényi network generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="56"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Generate random network according to Erdős–Rényi (ER) model. &lt;/p&gt;&lt;p&gt;In fact, there are two models: in &lt;span style=&quot; font-style:italic;&quot;&gt;G(n,p)&lt;/span&gt; edges are created with Bernoulli trials, while in &lt;span style=&quot; font-style:italic;&quot;&gt;G(n,M) &lt;/span&gt;a graph is randomly selected from all graphs with &lt;span style=&quot; font-style:italic;&quot;&gt;n&lt;/span&gt; nodes and &lt;span style=&quot; font-style:italic;&quot;&gt;M&lt;/span&gt; edges.  Read more in the manual.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="90"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Nodes &lt;span style=&quot; font-style:italic;&quot;&gt;n&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="145"/>
        <source>Model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="160"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Ubuntu&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;This will create a new random network using &lt;span style=&quot; font-weight:600;&quot;&gt;G(n,p)&lt;/span&gt; model, where&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;n&lt;/span&gt; is the number of nodes in the final graph&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;p&lt;/span&gt; is the probability with which an edge is included in the graph&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;If you select this model, you must enter the number of nodes n and the edge probability p. &lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;You may also select if the final network will be undirected or directed and if you want to allow nodes to link to themselves (diagonal non zero).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="175"/>
        <source>G(n, p)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="194"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;This will create a new random network using &lt;span style=&quot; font-weight:600;&quot;&gt;G(n,M)&lt;/span&gt; model, where&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt; n&lt;/span&gt; is the number of nodes in the final graph&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt; M&lt;/span&gt; is the number of edges in the final graph&lt;/p&gt;&lt;p&gt;If you select this model, you must enter both the number of nodes n and the number of edges M&lt;/p&gt;&lt;p&gt;You may also select if the final network will be undirected or directed and if you want to allow nodes to link to themselves (diagonal non zero).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="197"/>
        <source>G(n, M)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="238"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Edges &lt;span style=&quot; font-style:italic;&quot;&gt;M &lt;/span&gt;&lt;span style=&quot; color:#7c7c7c;&quot;&gt;for G(n,M) model only&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="284"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Edge Probability &lt;span style=&quot; color:#7c7c7c;&quot;&gt;applicable only in G(n,p) model&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="342"/>
        <source>Graph Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="363"/>
        <source>Undirected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="388"/>
        <source>Directed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="426"/>
        <source>Allow diagonals (loops) or set to zero?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogranderdosrenyi.ui" line="447"/>
        <source>Yes, allow</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogRandLattice</name>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="26"/>
        <source>Lattice network generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="56"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Generate a lattice network. You can select how many dimensions the lattice will have (i.e. d=2 for a two-dimensional lattice) and the length of each dimension (i.e. l=3 for a 3x3 lattice of 9 nodes). Read more in the manual.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="90"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="109"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Lattice Nodes &lt;/span&gt;&lt;/p&gt;&lt;p&gt;The resulting lattice will have this amount of nodes . &lt;/p&gt;&lt;p&gt;This value changes automatically as you modify the &lt;span style=&quot; font-style:italic;&quot;&gt;length l &lt;/span&gt;of each dimension (below).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="151"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Length &lt;span style=&quot; font-style:italic;&quot;&gt;l &lt;/span&gt;in each dimension &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="164"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Length&lt;/span&gt;&lt;/p&gt;&lt;p&gt;The size of the lattice in each dimension.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="206"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Dimension &lt;span style=&quot; font-style:italic;&quot;&gt;d&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="219"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Dimension &lt;/span&gt;&lt;span style=&quot; font-weight:600; font-style:italic;&quot;&gt;d&lt;/span&gt;&lt;/p&gt;&lt;p&gt;The dimension of the lattice.&lt;/p&gt;&lt;p&gt;I.e. enter 2 for a two-dimensional lattice.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="261"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Neighborhood &lt;span style=&quot; font-style:italic;&quot;&gt;n&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="274"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Neighborhood &lt;/span&gt;&lt;span style=&quot; font-weight:600; font-style:italic;&quot;&gt;n&lt;/span&gt;&lt;/p&gt;&lt;p&gt;The distance within which the neighbors on the lattice will be connected&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="316"/>
        <source>Graph Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="337"/>
        <source>Undirected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="362"/>
        <source>Directed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="397"/>
        <source>Circular</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="418"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;If checked, the lattice will be circular&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndlattice.ui" line="421"/>
        <source>false</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogRandRegular</name>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="26"/>
        <source>d-Regular network generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="56"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Generate a &lt;span style=&quot; font-style:italic;&quot;&gt;d-regular&lt;/span&gt; random network of &lt;span style=&quot; font-style:italic;&quot;&gt;n&lt;/span&gt; nodes. This is a graph where each vertex has the same number of neighbors &lt;span style=&quot; font-style:italic;&quot;&gt;d&lt;/span&gt;.&lt;/p&gt;&lt;p&gt;This model produces undirect and directed provided that n &amp;gt; 5, d/&lt;span style=&quot; font-style:italic;&quot;&gt;n &amp;lt; 0.5 &lt;/span&gt;and &lt;span style=&quot; font-style:italic;&quot;&gt;n*d &lt;/span&gt;is even. Read more in the manual.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="90"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The number n of nodes in the new Regular Network.&lt;/p&gt;&lt;p&gt;Note: For a &lt;span style=&quot; font-style:italic;&quot;&gt;d&lt;/span&gt;-regular graph of &lt;span style=&quot; font-style:italic;&quot;&gt;n&lt;/span&gt; nodes, it is necessary that &lt;span style=&quot; font-style:italic;&quot;&gt;n &amp;gt;= d + 1 &lt;/span&gt;and &lt;span style=&quot; font-style:italic;&quot;&gt;n*d &lt;/span&gt;is even&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="93"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="112"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter number n of nodes in the new Regular Network.&lt;/p&gt;&lt;p&gt;Constraints:  &lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;n &amp;gt; 6  &lt;/span&gt;and &lt;span style=&quot; font-style:italic;&quot;/&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;d/n &amp;gt; 0.5  &lt;/span&gt;and&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;n*d &lt;/span&gt;is even&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="154"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Degree &lt;span style=&quot; font-style:italic;&quot;&gt;d&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="167"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter the degree &lt;span style=&quot; font-style:italic;&quot;&gt;d&lt;/span&gt; each new node will have.&lt;/p&gt;&lt;p&gt;Constraints: &lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;d/n &amp;gt; 0.5 &lt;/span&gt;and&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;n*d &lt;/span&gt;is even&lt;/p&gt;&lt;p&gt;In directed Graph Mode, this Degree &lt;span style=&quot; font-style:italic;&quot;&gt;d&lt;/span&gt; option corresponds to the outDegree and the inDegree, which will be both equal to &lt;span style=&quot; font-style:italic;&quot;&gt;d&lt;/span&gt; in the generated directed regular network. &lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="209"/>
        <source>Graph Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="230"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Click &amp;quot;undirected&amp;quot; to generate an undirected &lt;span style=&quot; font-style:italic;&quot;&gt;d&lt;/span&gt;-regular network &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="233"/>
        <source>Undirected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="258"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Click &amp;quot;directed&amp;quot; to generate a directed &lt;span style=&quot; font-style:italic;&quot;&gt;d&lt;/span&gt;-regular network. &lt;/p&gt;&lt;p&gt;In this case, the Degree &lt;span style=&quot; font-style:italic;&quot;&gt;d&lt;/span&gt; option above corresponds to the outDegree and the inDegree which will be both equal to &lt;span style=&quot; font-style:italic;&quot;&gt;d&lt;/span&gt; in the generated regular network. &lt;/p&gt;&lt;p&gt;For instance, if you select &lt;span style=&quot; font-style:italic;&quot;&gt;d&lt;/span&gt;=4 and &lt;span style=&quot; font-style:italic;&quot;&gt;Graph Mode&lt;/span&gt;=directed, then each new node will have outDegree=4 (four outbound edges) and inDegree=4 (four inbound edges). The inbound and outbound edges of each node will not necessarily be from / to the same nodes.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="261"/>
        <source>Directed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="296"/>
        <source>Allow diagonals (loops) or set to zero?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="317"/>
        <source>Check to allow loops (nodes linking to themselves) in the new network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndregular.ui" line="320"/>
        <source>No loops</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogRandScaleFree</name>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="26"/>
        <source>Scale-free random network generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="56"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Generate a random scale-free network of &lt;span style=&quot; font-style:italic;&quot;&gt;n&lt;/span&gt; nodes according to the Barabási–Albert (BA) model which uses a preferential attachment mechanism. &lt;/p&gt;&lt;p&gt;The model starts with &lt;span style=&quot; font-style:italic;&quot;&gt;m&lt;/span&gt;&lt;span style=&quot; font-style:italic; vertical-align:sub;&quot;&gt;0&lt;/span&gt; connected nodes. In each step a new node is added, along with &lt;span style=&quot; font-style:italic;&quot;&gt;m&lt;/span&gt; edges to existing nodes. Read more in the manual.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="90"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Nodes &lt;span style=&quot; font-style:italic;&quot;&gt;n&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="109"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The amount of nodes in the resulting scale-free graph&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="151"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Power of preferential attachment &lt;span style=&quot; font-style:italic;&quot;&gt;p&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="164"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The power p of preferential attachment &lt;/p&gt;&lt;p&gt;Leave 1 for linear preferential attachment (BA model).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="209"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Initial connected nodes &lt;span style=&quot; font-style:italic;&quot;&gt;m&lt;/span&gt;&lt;span style=&quot; font-style:italic; vertical-align:sub;&quot;&gt;0&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="222"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The number m&lt;span style=&quot; vertical-align:sub;&quot;&gt;0&lt;/span&gt; of nodes in the initial connected network.&lt;/p&gt;&lt;p&gt;Leave 1 to start with just one node.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="267"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Edges to add in each step &lt;span style=&quot; font-style:italic;&quot;&gt;m&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="280"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The number of edges to add in each step&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="325"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Zero appeal &lt;span style=&quot; font-style:italic;&quot;&gt;α&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="338"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The initial attractiveness of a node - useful for isolate nodes with d =0&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="380"/>
        <source>Graph Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="401"/>
        <source>Undirected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="426"/>
        <source>Directed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="461"/>
        <source>Allow diagonals (loops) or set to zero?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="482"/>
        <source>Check to allow loops (nodes linking to themselves) in the new network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndscalefree.ui" line="485"/>
        <source>No loops</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogRandSmallWorld</name>
    <message>
        <location filename="../src/forms/dialograndsmallworld.ui" line="26"/>
        <source>Small-World network generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndsmallworld.ui" line="56"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Generate random network according to the &lt;span style=&quot; font-style:italic;&quot;&gt;Watts &amp;amp; Strogatz&lt;/span&gt; model.&lt;/p&gt;&lt;p&gt;This model produces graphs with small-world properties, including short average path lengths and high clustering. Read more in the manual.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndsmallworld.ui" line="90"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndsmallworld.ui" line="109"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The resulting graph will have N nodes and N*d/2 edges&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndsmallworld.ui" line="151"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Mean Degree &lt;span style=&quot; font-style:italic;&quot;&gt;d&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndsmallworld.ui" line="164"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;This is the mean edge degree each new node will have&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndsmallworld.ui" line="206"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Rewiring Probability &lt;span style=&quot; font-style:italic;&quot;&gt;β&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndsmallworld.ui" line="264"/>
        <source>Graph Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndsmallworld.ui" line="285"/>
        <source>Undirected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndsmallworld.ui" line="310"/>
        <source>Directed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndsmallworld.ui" line="345"/>
        <source>Allow diagonals (loops) or set to zero?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndsmallworld.ui" line="366"/>
        <source>Check to allow loops (nodes linking to themselves) in the new network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialograndsmallworld.ui" line="369"/>
        <source>No loops</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogSettings</name>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="26"/>
        <source>Settings &amp; Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="55"/>
        <source>General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="67"/>
        <source>Data Exporting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="75"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Default Save / Export folder &lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click the small button on the far right corner to select a folder, where all SocNetV files and reports will be saved by default. &lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="78"/>
        <source>Save folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="104"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Default Save / Export folder &lt;/span&gt;&lt;/p&gt;&lt;p&gt;This is the path of the folder where all SocNetV files and reports will be saved. &lt;/p&gt;&lt;p&gt;Click the button on the right to select a new folder. &lt;/p&gt;&lt;p&gt;If the folder does not exist, it wil be created.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="107"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Default Save / Export folder &lt;/span&gt;&lt;/p&gt;&lt;p&gt;This is the path of the folder where all SocNetV files and reports will be saved. &lt;/p&gt;&lt;p&gt;Click the button on the right to select a new folder. &lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. If the folder does not exist, it wil be created.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="123"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Default Save / Export folder &lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select a folder, where all SocNetV files and reports will be saved by default. &lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="126"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Default Save / Export folder &lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select a folder, where all SocNetV files and reports will be saved by default. &lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. If the folder does not exist, it wil be created.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="129"/>
        <location filename="../src/forms/dialogsettings.ui" line="730"/>
        <location filename="../src/forms/dialogsettings.ui" line="844"/>
        <location filename="../src/forms/dialogsettings.ui" line="948"/>
        <location filename="../src/forms/dialogsettings.ui" line="1152"/>
        <location filename="../src/forms/dialogsettings.ui" line="1462"/>
        <location filename="../src/forms/dialogsettings.ui" line="1520"/>
        <location filename="../src/forms/dialogsettings.ui" line="1592"/>
        <location filename="../src/forms/dialogsettings.ui" line="1718"/>
        <location filename="../src/forms/dialogsettings.ui" line="1841"/>
        <location filename="../src/forms/dialogsettings.ui" line="1979"/>
        <location filename="../src/forms/dialogsettings.ui" line="2053"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="160"/>
        <source>Reports</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="180"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Label Length&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Change the length of labels &lt;span style=&quot; font-style:italic;&quot;&gt;in reports&lt;/span&gt;. Use the spin box to the right to change the number of digits SocNetV should write when generating reports with labels, i.e. node labels in centrality reports.&lt;/p&gt;&lt;p&gt;The length cannot be a negative value. The default value is 10.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node number size.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="183"/>
        <source>Labels length</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="218"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Label Length&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Sets the length of labels &lt;span style=&quot; font-style:italic;&quot;&gt;in reports&lt;/span&gt;. This value describes the number of digits SocNetV should write when generating reports with labels, i.e. node labels in centrality reports.&lt;/p&gt;&lt;p&gt;The length cannot be a negative value. The default value is 8.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node number size.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="244"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Real Number Precision&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Change the precision of real numbers &lt;span style=&quot; font-style:italic;&quot;&gt;in reports&lt;/span&gt;. Use the spin box on the right to select a new precision namely  the number of fraction digits SocNetV should write when generating reports with real numbers, i.e. centrality reports..&lt;/p&gt;&lt;p&gt;The precision cannot be a negative value. The default value is 6.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node number size.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="247"/>
        <source>Real number precision</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="282"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Real Number Precision&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Sets the precision of real numbers &lt;span style=&quot; font-style:italic;&quot;&gt;in reports&lt;/span&gt;. This value describes the number of fraction digits SocNetV should write when generating reports with real numbers, i.e. centrality reports..&lt;/p&gt;&lt;p&gt;The precision cannot be a negative value. The default value is 6.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node number size.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="296"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;Chart Type&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;This is the chart type that is used in reports, i.e. to plot the distribution of a prominence index, such as Degree Centrality.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;Use the select box on the right to select a chart type.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;SocNetV supports the following chart types:&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;- Spline charts, which present data as a series of data points connected by lines. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;- Area charts, which present data as an area bound by two lines.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;- Bar charts, which present data as vertical bars. &lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="299"/>
        <source>Chart type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="331"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Ubuntu&apos;; font-size:11pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;Chart Type&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;Select which kind of chart type will be used in reports, i.e. to plot the &lt;/span&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;distribution of a &lt;/span&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;prominence index, such as Degree Centrality.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;SocNetV supports the following chart types:&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;- Spline charts, which present data as a series of data points connected by lines. &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;- Area charts, which present data as an area bound by two lines.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;- Bar charts, which present data as vertical bars. &lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="353"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Output Format&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Select whether new reports (i.e. Analyze &amp;gt; ...) are written as a full HTML document, or a lean CSV table for opening in a spreadsheet application.&lt;/p&gt;&lt;p&gt;CSV is not offered for every report - narrative/single-value reports (e.g. Connectedness) and the visual adjacency plot are always HTML, since a CSV file has no meaningful equivalent for them.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="356"/>
        <source>Output format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="388"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Output Format&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Select whether new reports are written as a full HTML document (default), or a lean CSV table.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="419"/>
        <source>Image Exporting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="425"/>
        <location filename="../src/forms/dialogsettings.ui" line="428"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;SocNetV logo on exported images&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable the printing of a small SocNetV logo on exported PNG and BMP network images &lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="434"/>
        <source>Print SocNetV logo on exported Images </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="466"/>
        <source>Debugging and Progressing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="472"/>
        <location filename="../src/forms/dialogsettings.ui" line="541"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Debug Messages&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable debug messages to strerr. &lt;/p&gt;&lt;p&gt;Once you enable this and press OK, you must close and run SocNetV again from the command line / terminal, in order to see the debug messages.&lt;/p&gt;&lt;p&gt;Enabling has a significant cpu cost but lets you know what SocNetV is actually doing.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="475"/>
        <location filename="../src/forms/dialogsettings.ui" line="544"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Debug Messages&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enables or disable debug messages to strerr. &lt;/p&gt;&lt;p&gt;Enabling has a significant cpu cost but lets you know what SocNetV is actually doing.&lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="481"/>
        <source>Print debug messages to command line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="488"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Progress Bars&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable the application Progress Bars.&lt;/p&gt;&lt;p&gt;Progress Bars may appear during time-cost operations. &lt;/p&gt;&lt;p&gt;Enabling Progress Bars has a significant cpu cost but lets you know about the progress of a given operation.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="491"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Progress Bars&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable the application Progress Bars.&lt;/p&gt;&lt;p&gt;Progress Bars may appear during time-cost operations. &lt;/p&gt;&lt;p&gt;Enabling Progress Bars has a significant cpu cost but lets you know about the progress of a given operation.&lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="497"/>
        <source>Show progress dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="535"/>
        <source>Application Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="550"/>
        <source>Use SocNetV Stylesheet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="579"/>
        <source>Window options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="594"/>
        <location filename="../src/forms/dialogsettings.ui" line="597"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Control panel&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable the Control panel (left panel)&lt;/p&gt;&lt;p&gt;The Control Panel is the widget at the left of the application window, where you can find essential functions and options for Editing, Analyzing and Visualizing your network data.&lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="603"/>
        <source>Show Control panel (left panel)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="613"/>
        <location filename="../src/forms/dialogsettings.ui" line="616"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Toolbar&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable the application toolbar.&lt;/p&gt;&lt;p&gt;The toolbar is the widget right below the menu, and carries useful icons. You can disable it if you like from here...&lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="622"/>
        <source>Show toolbar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="632"/>
        <location filename="../src/forms/dialogsettings.ui" line="635"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Statistics panel&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable the statistics panel (right panel)&lt;/p&gt;&lt;p&gt;The Statistics panel is the widget at the right of the application window, where you can see statistics about the whole network such as node and edge/arc count, density etc as well as statistics about the last clicked node (in-degree, out-degree, clustering coefficient etc).&lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="641"/>
        <source>Show Statistics panel (right panel)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="651"/>
        <location filename="../src/forms/dialogsettings.ui" line="654"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Statusbar&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable the application statusbar.&lt;/p&gt;&lt;p&gt;The statusbar is the widget at the bottom of the window, where messages appear. &lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="660"/>
        <source>Show statusbar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="675"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="681"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Default node settings&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Any change to these settings will apply to all existing nodes immediately.&lt;/p&gt;&lt;p&gt;Once you press OK, these settings will be saved and they will be used in all future SocNetV sessions.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="684"/>
        <source>Node settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="692"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click the colored button to select a new color for all nodes.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing nodes immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node color when creating new nodes (except when loading network files which declare specific node settings).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="695"/>
        <source>Node color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="724"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select a new node color for all nodes.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing nodes immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node color when creating new nodes (except when loading network files which declare specific node settings).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="727"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click to select a new default node color.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing nodes immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node color.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="747"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node shape&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click on any of the following shapes to select a new node shape for all nodes. &lt;/p&gt;&lt;p&gt;This will apply to all existing nodes immediately.&lt;/p&gt;&lt;p&gt;Once you press OK, the default node shape will be saved and it will be used in all future SocNetV sessions when creating new nodes (except when loading network files which declare specific shapes for nodes).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="750"/>
        <source>Node shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="776"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Select a node shape. &lt;/p&gt;&lt;p&gt;If you select &amp;quot;Icon&amp;quot; then you must click on the custom icon button (below) to select the desired icon file from your filesystem. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="787"/>
        <location filename="../src/forms/dialogsettings.ui" line="1996"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Background image&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click the button on the right to select a new background image.&lt;/p&gt;&lt;p&gt;If the file does not exist, the default background color will be used.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="790"/>
        <source>Custom Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="816"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Custom Icon &lt;/span&gt;&lt;/p&gt;&lt;p&gt;This box only shows the path of the selected custom icon file for all network nodes. If it is empty, it means you have not selected any image yet.&lt;/p&gt;&lt;p&gt;Click the button on the right to select a new image to be used as custom icon in all the nodes of the network.&lt;/p&gt;&lt;p&gt;Valid icons are images: JPG, PNG, JPEG, SVG etc.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="819"/>
        <location filename="../src/forms/dialogsettings.ui" line="2028"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Background image&lt;/span&gt;&lt;/p&gt;&lt;p&gt;This is the path of the default background image. &lt;/p&gt;&lt;p&gt;Click the button on the right to select a new background image.&lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. If the file does not exist, the default background color will be used.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="838"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Custom Icon &lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select a new custom icon for all nodes of the network. &lt;/p&gt;&lt;p&gt;Valid icons are images: JPG, PNG, JPEG, SVG etc.&lt;/p&gt;&lt;p&gt;If you don&apos;t select an image file, you must select one of the default shapes from the Node Shape menu above. &lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="841"/>
        <location filename="../src/forms/dialogsettings.ui" line="2050"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Background image&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select a new background image.&lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. If the file does not exist, the default background color will be used.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="855"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node size&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Use the spin box to select a new size (in pixels) for all nodes. &lt;/p&gt;&lt;p&gt;Actual node size will vary according to selected shape. For instance, if the selected shape is circle and the selected size is 8, then the circle will have a diameter of 16 pixels. &lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing nodes immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node size when creating new nodes (except when loading network files which declare specific node settings).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="858"/>
        <source>Node size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="887"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node size&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Select a new size for all nodes. Actual node size will vary according to selected shape. For instance, if the selected shape is circle  and the size is 8, then the circle will have a diameter of 16 pixels. &lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing nodes immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node size.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="905"/>
        <source>Node Number settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="913"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node number color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Change the color for all node numbers. Click the colored button on the right corner to select a new color.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing node numbers immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node number color when creating new nodes.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="916"/>
        <source>Number color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="945"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node number color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click to select a new color for  all node numbers.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing node numbers immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node number color when creating new nodes.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="965"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Number distance from node&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Change the distance of each number from the respective node. Use the spin box on the right to select a new distance (in pixels).&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing node numbers immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default distance from node.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="968"/>
        <source>Number distance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="997"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Number distance from nodes&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Select a new distance (in pixels) of numbers from the respective nodes.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing node numbers immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default distance from node.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1012"/>
        <location filename="../src/forms/dialogsettings.ui" line="1015"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node numbers&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable displaying node numbers.&lt;/p&gt;&lt;p&gt;Any change will apply to all existing nodes immediately.&lt;/p&gt;&lt;p&gt;Once you press OK, this setting will be saved and it will be used in all future SocNetV sessions.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1021"/>
        <source>Display node numbers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1030"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node number font size&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Change the font size (in pixels) of all node numbers. Use the spin box on the right to select a new font size (in pixels).&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing node numbers immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node number size.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1033"/>
        <source>Number font size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1062"/>
        <location filename="../src/forms/dialogsettings.ui" line="1065"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node number size&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Select a new font size (in pixels) for node numbers. Set it to 0 to let the program automagically select a different font size according to the node size.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing node numbers immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node number size.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1077"/>
        <location filename="../src/forms/dialogsettings.ui" line="1080"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node numbers inside shapes&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable displaying node numbers inside the node shapes&lt;/p&gt;&lt;p&gt;Any change will apply to all existing nodes immediately.&lt;/p&gt;&lt;p&gt;Once you press OK, this setting will be saved and it will be used in all future SocNetV sessions.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1086"/>
        <source>Display node numbers inside node shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1096"/>
        <source>Node Label settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1102"/>
        <location filename="../src/forms/dialogsettings.ui" line="1105"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node labels&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable displaying labels below the nodes.&lt;/p&gt;&lt;p&gt;Any change will apply to all existing nodes immediately.&lt;/p&gt;&lt;p&gt;Once you press OK, this setting will be saved and it will be used in all future SocNetV sessions.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1111"/>
        <source>Display node labels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1120"/>
        <location filename="../src/forms/dialogsettings.ui" line="1806"/>
        <source>Label color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1149"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node label color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click to select a new color for node labels.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing node labels immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node label color.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1169"/>
        <location filename="../src/forms/dialogsettings.ui" line="1858"/>
        <source>Label font size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1198"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Node label size&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Select a new font size (in pixels) for all node labels.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing node labels immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default node label size.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1215"/>
        <source>Label distance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1244"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Label distance from node&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Change the distance of labels from the respective nodes.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing node labels immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default label distance from node.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1263"/>
        <source>Edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1269"/>
        <source>Edge settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1283"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Edges &lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable displaying edges.&lt;/p&gt;&lt;p&gt;Any change will apply to all existing edges immediately.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1289"/>
        <source>Display edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1296"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Edges &lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable displaying arrows in directed edges. Useful If you work with directional social network data. You can disable it if your network is undirected.&lt;/p&gt;&lt;p&gt;Any change will apply to all existing edges immediately and saved for all future sessions (until you change it again).&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1302"/>
        <source>Display edge arrows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1313"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Arrow size&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Controls the size of the arrowheads drawn on directed edges. A larger value produces bigger arrowheads.&lt;/p&gt;&lt;p&gt;Any change will apply to all existing edges immediately and saved for future sessions.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1316"/>
        <source>Arrow size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1345"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Arrow size&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Controls the size of the arrowheads on directed edges.&lt;/p&gt;&lt;p&gt;Any change will apply to all existing edges immediately and saved for future sessions.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1365"/>
        <location filename="../src/forms/dialogsettings.ui" line="1368"/>
        <location filename="../src/forms/dialogsettings.ui" line="1391"/>
        <location filename="../src/forms/dialogsettings.ui" line="1394"/>
        <location filename="../src/forms/dialogsettings.ui" line="1404"/>
        <location filename="../src/forms/dialogsettings.ui" line="1407"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Default edge shape&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Select the default edge shape for all edges. &lt;/p&gt;&lt;p&gt;Edges can be either straight lines (default) or bezier curves.&lt;/p&gt;&lt;p&gt;This will apply to all existing edgesimmediately.&lt;/p&gt;&lt;p&gt;Once you press OK, the default edge shape will be saved and it will be used in all future SocNetV sessions.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1371"/>
        <source>Edge shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1397"/>
        <source>Straight Lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1410"/>
        <source>Be&amp;zier Curves</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1421"/>
        <location filename="../src/forms/dialogsettings.ui" line="1424"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Edge color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click the colored button on the right to select a new color for all edges.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing edges immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default edge color. Until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1427"/>
        <source>Default edge color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1456"/>
        <location filename="../src/forms/dialogsettings.ui" line="1459"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Edge color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click to select a new color for all edges.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing edges immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default edge color. Until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1479"/>
        <location filename="../src/forms/dialogsettings.ui" line="1482"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Negative edge color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click the colored button at the right corner to select a new color for negative weighted edges.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing &amp;quot;negative&amp;quot; edges immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default edge color for &amp;quot;negative&amp;quot; edges. Until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1485"/>
        <source>Negative valued edge color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1514"/>
        <location filename="../src/forms/dialogsettings.ui" line="1517"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Negative edge color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select a new default edge color for all negative weighted edges.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing &amp;quot;negative&amp;quot; edges immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default color for &amp;quot;negative&amp;quot; edges. Until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1537"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Show zero-weight edges&lt;/span&gt;&lt;/p&gt;&lt;p&gt;When checked, edges with weight 0 are drawn on the canvas using the zero-valued edge color below. When unchecked, they are silently skipped on load — no ghost edges appear.&lt;/p&gt;&lt;p&gt;Zero-weight edges are never included in any SNA computation regardless of this setting.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1540"/>
        <source>Show zero-weight edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1551"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Zero edge color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click the colored button at the right corner to select a new color for edges with zero weights.&lt;/p&gt;&lt;p&gt;ATTTENTION:  Zero-valued edges are being omittted during network analysis computations.  This setting is available for those that have data  (i.e. weighted edge lists) with zero weights on some edges and they still need to draw those edges, despite the fact that they will not be considered in any SNA computation by SocNetV.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing &amp;quot;zero&amp;quot; edges immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default edge color for &amp;quot;zero&amp;quot; edges. Until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1554"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Zero edge color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click the colored button at the right corner to select a new color for edges with zero weights.&lt;/p&gt;&lt;p&gt;ATTTENTION: Zero-valued edges are being omittted during network analysis computations. This setting is available for those that have data (i.e. weighted edge lists) with zero weights on some edges and they still need to draw those edges, despite the fact that they will not be considered in any SNA computation by SocNetV.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing &amp;quot;zero&amp;quot; edges immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default edge color for &amp;quot;zero&amp;quot; edges. Until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1557"/>
        <source>Zero valued edge color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1586"/>
        <location filename="../src/forms/dialogsettings.ui" line="1589"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Zero edge color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select a new color for edges with zero weights.&lt;/p&gt;&lt;p&gt;ATTTENTION: Zero-valued edges are being omittted during network analysis computations. This setting is available for those that have data (i.e. weighted edge lists) with zero weights on some edges and they still need to draw those edges, despite the fact that they will not be considered in any SNA computation by SocNetV.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing &amp;quot;zero&amp;quot; edges immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default edge color for &amp;quot;zero&amp;quot; edges. Until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1609"/>
        <source>Edge offset from node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1638"/>
        <location filename="../src/forms/dialogsettings.ui" line="1641"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Edge offset from node &lt;/span&gt;&lt;/p&gt;&lt;p&gt;Changes the offset of each edge from each source and target nodes. rs.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing edges immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions when creating new edges.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1662"/>
        <source>Weight number settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1668"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Edge weight numbers&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable edge weight numbers. When enabled, a number will be displayed along every edge indicating the edge weight.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing weight numbers immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default when creating new edges.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1674"/>
        <source>Display edge weight numbers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1683"/>
        <source>Weight number color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1712"/>
        <location filename="../src/forms/dialogsettings.ui" line="1715"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Edge weight number color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click to select a new color for all edge weight numbers.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing weight numbers immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default edge weight number color when creating new edges.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1735"/>
        <source>Weight number font size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1764"/>
        <location filename="../src/forms/dialogsettings.ui" line="1767"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Edge weight number text size&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click to select a new text size (in pixels) for all edge weight numbers.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing weight numbers immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default edge weight number size when creating new edges.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1785"/>
        <source>Edge label settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1791"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Edge labels&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable displaying edge labels.&lt;/p&gt;&lt;p&gt;Any change will apply to all existing edges immediately.&lt;/p&gt;&lt;p&gt;Once you press OK, this setting will be saved and it will be used in all future SocNetV sessions.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1797"/>
        <source>Display edge labels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1838"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Default edge label color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click to select a new default color for edge labels.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing edge labels immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default edge label color.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1890"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Default edge label size&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Select the default font size for all edge labels.&lt;/p&gt;&lt;p&gt;Any change to this setting will apply to all existing edge labels immediately.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and used in all future SocNetV sessions as default edge label size.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1906"/>
        <source>Canvas</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1924"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Canvas Background&lt;/span&gt;&lt;/p&gt;&lt;p&gt;In this section, there are general settings for the canvas, such as the background color or image.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1927"/>
        <source>Canvas Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1935"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Background color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click the button on the right to select a new background color. &lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1938"/>
        <source>Background color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1973"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Background color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select a new background color. &lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1976"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Background color&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select a new background color. &lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="1999"/>
        <source>Background Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2025"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Background image&lt;/span&gt;&lt;/p&gt;&lt;p&gt;This is the path of the default background image. &lt;/p&gt;&lt;p&gt;Click the button on the right to select a new background image.&lt;/p&gt;&lt;p&gt;If the file does not exist, the default background color will be used.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2047"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Background image&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Click this button to select a new background image.&lt;/p&gt;&lt;p&gt;If the file does not exist, the default background color will be used.&lt;/p&gt;&lt;p&gt;This is a permanent setting. Once you press OK, it will be saved and will be the default of the application every time you run SocNetV - until you change it again.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2071"/>
        <location filename="../src/forms/dialogsettings.ui" line="2099"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Performance Settings&lt;/span&gt;&lt;/p&gt;&lt;p&gt;The following options influence the performance of the SocNetV canvas, inside which nodes and edges are being drawn. They affect the look of nodes and edges as well the precision and speed of the graphics engine.&lt;/p&gt;&lt;p&gt;Most of these settings have noticeable effects only in large networks. For instance, if you have a network with over 3000 actors and 10000 edges you might want to disable Antialiasing, Antialiasing Auto-adjustment and Smooth Pixmap Transformation while enabling Cache Background. &lt;/p&gt;&lt;p&gt;Also, if you need to visually interact with edges in a large network, you can experiment with the Update Mode setting to find which is suitable for your workload. The default setting &amp;quot;Full&amp;quot; means that the canvas is fully redrawn every time you make a small change.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2074"/>
        <source>Hardware Acceleration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2080"/>
        <location filename="../src/forms/dialogsettings.ui" line="2202"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Edge highlighting&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable highlighting of selected edges.&lt;/p&gt;&lt;p&gt;By default, SocNetV hughlights the edges you select with the mouse, as well as all edges connected to the selected node. Although a useful feature, this can slow down the application responsiveness when the network consists of thousand nodes and edges. &lt;/p&gt;&lt;p&gt;If disabled, selected edges will not be highlighted.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2083"/>
        <location filename="../src/forms/dialogsettings.ui" line="2205"/>
        <location filename="../src/forms/dialogsettings.ui" line="2224"/>
        <location filename="../src/forms/dialogsettings.ui" line="2227"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Cache Background&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable caching of the canvas background. &lt;/p&gt;&lt;p&gt;The graphics engine can cache pre-rendered content in a pixmap, which is then drawn onto the viewport. The purpose of such caching is to speed up the total rendering time for areas that are slow to render (i.e. texture, gradient and alpha blended backgrounds). &lt;/p&gt;&lt;p&gt;If enabled, the canvas background is cached by allocating one pixmap with the full size of the viewport. The cache is invalidated every time the view is transformed. However, when scrolling, only partial invalidation is required. &lt;/p&gt;&lt;p&gt;If not enabled, nothing is cached and all painting is done directly onto the viewport.&lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2089"/>
        <source>Use OpenGL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2102"/>
        <source>Performance settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2114"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Anti-Aliasing&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable Anti-Aliasing. If enabled, the graphics engine will antialias edges of primitives if possible.  &lt;/p&gt;&lt;p&gt;Anti-aliasing is a technique which makes nodes, lines and text, smoother and fancier. But it comes at the cost of speed... &lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2117"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Anti-Aliasing&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable Anti-Aliasing.&lt;/p&gt;&lt;p&gt;Anti-aliasing is a technique which makes nodes, lines and text, smoother and fancier. But it comes at the cost of speed... &lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2123"/>
        <source>Antialiasing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2136"/>
        <location filename="../src/forms/dialogsettings.ui" line="2139"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Antialiasing Auto-Adjustment&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable antialiasing auto-adjustment of exposed areas. Items that render antialiased lines on the boundaries of their bounding rectangle can end up rendering parts of the line outside. To prevent rendering artifacts, the graphics engine expands all exposed regions by 2 pixels in all directions. &lt;/p&gt;&lt;p&gt;If you disable this, SocNetV will no longer perform these adjustments, minimizing the areas that require redrawing, which improves performance. A common side effect is that items that do draw with antialiasing can leave painting traces behind on the scene as they are moved.&lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2145"/>
        <source>Antialising Auto-Adjustment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2158"/>
        <location filename="../src/forms/dialogsettings.ui" line="2161"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Smooth pixmap transformations&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enable or disable smooth pixmap transformations. &lt;/p&gt;&lt;p&gt;If enabled, the engine will use a smooth pixmap transformation algorithm (such as bilinear) rather than nearest neighbor.&lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2167"/>
        <source>Smooth Pixmap Transformation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2180"/>
        <location filename="../src/forms/dialogsettings.ui" line="2183"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Save Painter State&lt;/span&gt;&lt;/p&gt;&lt;p&gt;When rendering, the graphics engine can protect (&amp;quot;save&amp;quot;) the painter state when rendering the background or foreground, and when rendering each item. This allows us to leave the painter in an altered state. &lt;/p&gt;&lt;p&gt;However, if the items consistently do restore the state, you should disable this option to prevent the application from doing the same.&lt;/p&gt;&lt;p&gt;This is a permanent setting, it will be the default of the application every time you run SocNetV. &lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2189"/>
        <source>Save Painter State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2211"/>
        <source>Edge Highlighting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2233"/>
        <source>Cache Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2248"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;Update Mode&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Use the drop-down menu on the right to select the update mode when the canvas changes. Usually you do not need to modify this property, but there are some cases where doing so can improve rendering performance. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The default value is Full, where the graphics engine will update the entire canvas when some of its contents change.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; text-decoration: underline;&quot;&gt;Full&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;When any visible part of the canvas changes or is reexposed, the engine will update the entire canvas. This approach is fastest when the engine spends more time figuring out what to draw than it would spend drawing (e.g., when very many small items are repeatedly updated). This is the default setting as it is the fastest with network of thousands of edges.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; text-decoration: underline;&quot;&gt;Minimal&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The engine will determine the minimal region that requires a redraw, minimizing the time spent drawing by avoiding a redraw of areas that have not changed. Although this approach provides the best performance in general, if there are many small visible changes on the scene, the engine might end up spending more time finding the minimal approach than it will spend drawing.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; text-decoration: underline;&quot;&gt;Bounding Rectangle &lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The bounding rectangle of all changes in the canvas will be redrawn. This mode has the advantage that the engine searches only one region for changes, minimizing time spent determining what needs redrawing. The disadvantage is that areas that have not changed also need to be redrawn.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; text-decoration: underline;&quot;&gt;None&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The engine will never update the canvas when something changes; This mode disables all item changes. Normally, you don&apos;t want to use this!&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2251"/>
        <source>Update mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2283"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Ubuntu&apos;; font-size:11pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;Update Mode&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Select how to update areas of the canvas that have been reexposed or changed. Usually you do not need to modify this property, but there are some cases where doing so can improve rendering performance. &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The default value is Full, where the graphics engine will update the entire canvas when some of its contents change.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; text-decoration: underline;&quot;&gt;Full&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;When any visible part of the canvas changes or is reexposed, the engine will update the entire canvas. This approach is fastest when the engine spends more time figuring out what to draw than it would spend drawing (e.g., when very many small items are repeatedly updated). This is the default setting as it is the fastest with network of thousands of edges.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; text-decoration: underline;&quot;&gt;Minimal&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The engine will determine the minimal  region that requires a redraw, minimizing the time spent drawing by avoiding a redraw of areas that have not changed. Although this approach provides the best performance in general, if there are many small visible changes on the scene, the engine might end up spending more time finding the minimal approach than it will spend drawing.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; text-decoration: underline;&quot;&gt;Bounding Rectangle &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The bounding rectangle of all changes in the canvas will be redrawn. This mode has the advantage that the engine searches only one region for changes, minimizing time spent determining what needs redrawing. The disadvantage is that areas that have not changed also need to be redrawn.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; text-decoration: underline;&quot;&gt;None&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;The engine will never update the canvas when something changes;  This mode disables all item changes. Normally, you don&apos;t want to use this!&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2325"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Index Method&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Controls how the graphics engine indexes item positions on the canvas. &lt;span style=&quot; font-weight:600;&quot;&gt;NoIndex is strongly recommended&lt;/span&gt; and is the default. SocNetV networks are dynamic — nodes and edges are continuously moved, added, and removed. BspTreeIndex rebuilds its spatial tree on every such change, which causes severe slowdowns during rubber-band selection and node drag on networks with more than a few hundred nodes.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600; font-style:italic;&quot;&gt;NoIndex&lt;/span&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;: &lt;/span&gt;No index. Item location is O(N), but adding, moving, and removing items is O(1). Ideal for dynamic scenes. &lt;span style=&quot; font-weight:600;&quot;&gt;(Recommended)&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600; font-style:italic;&quot;&gt;BspTreeIndex&lt;/span&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;: &lt;/span&gt;A Binary Space Partitioning tree. Item location is O(log N), but every move triggers a tree rebuild. Only suitable for static scenes where items rarely change position.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2328"/>
        <source>Index Method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2360"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Ubuntu&apos;; font-size:11pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt; font-weight:600;&quot;&gt;Index Method&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;Controls how the graphics engine indexes item positions on the canvas. &lt;/span&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt; font-weight:600;&quot;&gt;NoIndex is strongly recommended&lt;/span&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt; and is the default. SocNetV networks are dynamic — nodes and edges are continuously moved, added, and removed. BspTreeIndex rebuilds its spatial tree on every such change, causing severe slowdowns during rubber-band selection and node drag on networks with more than a few hundred nodes.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt; font-weight:600; font-style:italic;&quot;&gt;NoIndex&lt;/span&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt; font-style:italic;&quot;&gt;: &lt;/span&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;No index. Item location is O(N), but adding, moving, and removing items is O(1). Best for dynamic scenes. &lt;/span&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt; font-weight:600;&quot;&gt;(Recommended)&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt; &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt; font-weight:600; font-style:italic;&quot;&gt;BspTreeIndex&lt;/span&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt; font-style:italic;&quot;&gt;: &lt;/span&gt;&lt;span style=&quot; font-family:&apos;DejaVu Sans&apos;; font-size:10pt;&quot;&gt;A Binary Space Partitioning tree. Item location is O(log N), but every move triggers a tree rebuild. Only suitable for static scenes where items rarely change position.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2383"/>
        <source>Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2395"/>
        <source>Saving options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.ui" line="2401"/>
        <source>Save zero-weight edges (GraphML only)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.cpp" line="563"/>
        <source>Select a new data dir</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.cpp" line="633"/>
        <source>Select a background color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.cpp" line="655"/>
        <source>Select a background image </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.cpp" line="656"/>
        <source>All (*);;PNG (*.png);;JPG (*.jpg)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.cpp" line="701"/>
        <source>Select a color for Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.cpp" line="770"/>
        <source>Select a new icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.cpp" line="772"/>
        <source>Images (*.png *.jpg *.jpeg *.svg);;All (*.*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.cpp" line="850"/>
        <source>Select color for Node Numbers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.cpp" line="881"/>
        <source>Select color for Node Labels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.cpp" line="954"/>
        <source>Select color for Edges </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsettings.cpp" line="973"/>
        <location filename="../src/forms/dialogsettings.cpp" line="993"/>
        <source>Select color for negative Edges</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogSimilarityMatches</name>
    <message>
        <location filename="../src/forms/dialogsimilaritymatches.ui" line="29"/>
        <source>Similarity: Matches</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritymatches.ui" line="37"/>
        <source>Variables in:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritymatches.ui" line="53"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Rows: &lt;/span&gt;Correlate outbound ties (or distances, depending on the selected matrix above) between pairs of actors.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Columns: &lt;/span&gt;Correlate inbound ties (or distances, depending on the selected matrix above) between pairs of actors.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Both: &lt;/span&gt;Correlate both outbound and inbound ties (or distances, depending on the selected matrix above) between pairs of actors. In this case, the input matrix is expanded by listing row vectors followed by column vectors. This is useful only when you have directed data.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritymatches.ui" line="62"/>
        <source>Enable to include matrix diagonal in calculations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritymatches.ui" line="65"/>
        <source>Include input matrix diagonal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritymatches.ui" line="74"/>
        <source>Matching measure:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritymatches.ui" line="90"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Select a matching method. &lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Exact Matches&lt;/span&gt;: Examines pairs of actors for exact tie or distance matches (present or absent) to other actors and returns a proportion to their overall ties. &lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Positive Matches (Jaccard/Co-citation)&lt;/span&gt;: Looks for same ties/distances reported by both actors. Returns the ratio to the total number of ties reported.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Hamming distance&lt;/span&gt;: Reports the number of ties/distances to other actors which differ between each pair of actors.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Cosine similarity&lt;/span&gt;: Computes the pair-wise similarity of actors as the dot product of their tie/distance vectors divided by the magnitude of these vectors. &lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritymatches.ui" line="111"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Compute a &lt;span style=&quot; font-weight:600;&quot;&gt;similarity matrix&lt;/span&gt;, where each element (i,j) is the pair-wise similarity score of actors i and j according to the selected &amp;quot;matching&amp;quot; method. For example, the &amp;quot;Simple Matching&amp;quot; method counts the number of times that actors i and j have the same tie / distance (present or absent) to other actors. &lt;/p&gt;&lt;p&gt;Select input matrix and where the &amp;quot;variables&amp;quot; are. For instance, select Adjacency matrix and Rows to correlate the outbound ties between all pairs of actors. Select Both to correlate the both inbound and outbound ties. Hover over &amp;quot;Matching measure&amp;quot; select box for more info on each method.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritymatches.ui" line="154"/>
        <source>Input matrix:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritymatches.ui" line="170"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Adjacency:&lt;/span&gt; Use the active network&apos;s adjacency matrix as input to correlate ties between all pairs of actors. &lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Distances:&lt;/span&gt; Use the active network&apos;s geodesic distances matrix to correlate distances between all pairs of actors.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogSimilarityPearson</name>
    <message>
        <location filename="../src/forms/dialogsimilaritypearson.ui" line="29"/>
        <source>Pearson Correlations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritypearson.ui" line="37"/>
        <source>Input matrix:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritypearson.ui" line="53"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Adjacency:&lt;/span&gt; Use the active network&apos;s adjacency matrix as input to correlate ties between all pairs of actors. &lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Distances:&lt;/span&gt; Use the active network&apos;s geodesic distances matrix to correlate distances between all pairs of actors.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritypearson.ui" line="64"/>
        <source>Variables in:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritypearson.ui" line="80"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Rows: &lt;/span&gt;Correlate outbound ties (or distances, depending on the selected matrix above) between pairs of actors.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Columns: &lt;/span&gt;Correlate inbound ties (or distances, depending on the selected matrix above) between pairs of actors.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Both: &lt;/span&gt;Correlate both outbound and inbound ties (or distances, depending on the selected matrix above) between pairs of actors. In this case, the input matrix is expanded by listing row vectors followed by column vectors. This is useful only when you have directed data.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritypearson.ui" line="119"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Compute &lt;span style=&quot; font-weight:600;&quot;&gt;Pearson Product Moment Correlation Coefficients&lt;/span&gt; (PPMCC) between the rows, the columns or both of a social network matrix (adjacency or distance matrix). The result is a &lt;span style=&quot; font-weight:600;&quot;&gt;correlation matrix &lt;/span&gt;containing the correlation coefficients between each variable (i.e. row) and the others. This might be useful if you want to check the pair-wise similarity of the actors, in terms of their ties. &lt;/p&gt;&lt;p&gt;Select input matrix and what &amp;quot;variables&amp;quot; to correlate. For instance, select Adjacency matrix and Rows to correlate the outbound ties between all pairs of actors. Select Both to correlate the both inbound and outbound ties.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritypearson.ui" line="132"/>
        <source>Enable to include matrix diagonal in calculations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsimilaritypearson.ui" line="135"/>
        <source>Include input matrix diagonal</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogSystemInfo</name>
    <message>
        <location filename="../src/forms/dialogsysteminfo.ui" line="26"/>
        <source>System Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsysteminfo.ui" line="38"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Use the following to provide more meaningful information in your bug reports:&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogsysteminfo.cpp" line="100"/>
        <source>SocNetV has OpenGL support, but you have disabled it. &lt;br&gt;Please enable OpenGL from Settings -&gt; Canvas to enjoy faster drawing on the canvas.&lt;br&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DialogWebCrawler</name>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="26"/>
        <source>Generate network from web links</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="34"/>
        <source>URL patterns to include</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="41"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Allowed URL Patterns&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enter, in separate lines, one or more URL patterns to &lt;span style=&quot; font-weight:600;&quot;&gt;include&lt;/span&gt; while crawling. For example:&lt;/p&gt;&lt;p&gt;example.com/pattern/*&lt;/p&gt;&lt;p&gt;Do not enter spaces. Leave * to crawl all urls.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="52"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Crawl Internal Links &lt;/span&gt;&lt;/p&gt;&lt;p&gt;If enabled, the crawler will include and map &lt;span style=&quot; font-weight:600;&quot;&gt;internal links, &lt;/span&gt; that is pages from the same domain (or, in other words, from the same host ) as the URL being parsed each time.&lt;/p&gt;&lt;p&gt;If you do not want to crawl internal links, disable this option.&lt;/p&gt;&lt;p&gt; Please note that you MUST enable either this option or the &amp;quot;Include external links&amp;quot; option, for the crawler to work.&lt;/p&gt;&lt;p&gt;Default is to crawl internal links only. &lt;/p&gt;&lt;p&gt;You can further refine what kind of internal links to follow with the two options below: Child links and Parent links. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="55"/>
        <source>Crawl internal links</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="65"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Crawl child links&lt;/span&gt;&lt;/p&gt;&lt;p&gt;If enabled, the crawler will map &lt;span style=&quot; font-weight:600;&quot;&gt;child URLs&lt;/span&gt;&lt;/p&gt;&lt;p&gt;A URL is a &lt;span style=&quot; font-style:italic;&quot;&gt;childUrl &lt;/span&gt;of another URL if the two URLs share the same scheme and authority, and the latter URL&apos;s path is a parent of the path of &lt;span style=&quot; font-style:italic;&quot;&gt;childUrl&lt;/span&gt;. This applies only to internal URLs.&lt;/p&gt;&lt;p&gt;For instance, www.socnetv.org/docs/manual.html is a child URL of www.socnetv.org/docs/ &lt;/p&gt;&lt;p&gt;If you don&apos;t want to crawl child URLs, disable this option. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="68"/>
        <source>Child links</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="78"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Crawl parent links&lt;/span&gt;&lt;/p&gt;&lt;p&gt;If enabled, the crawler will map &lt;span style=&quot; font-weight:600;&quot;&gt;parent URLs&lt;/span&gt;. &lt;/p&gt;&lt;p&gt;A URL is a &lt;span style=&quot; font-style:italic;&quot;&gt;parent &lt;/span&gt;of another URL if the two URLs share the same scheme and authority, and the former URL&apos;s path is a parent of the path of the latter URL.  This applies to internal URLs.&lt;/p&gt;&lt;p&gt;For instance, the URL www.socnetv.org/docs/ is a parent URL of www.socnetv.org/docs/manual.html&lt;/p&gt;&lt;p&gt;If you don&apos;t want to crawl parent links, disable this option. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="81"/>
        <source>Parent links</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="95"/>
        <source>URL patterns to exclude</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="102"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Excluded URL Patterns&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Enter, in separate lines, one or more URL patterns to &lt;span style=&quot; font-weight:600;&quot;&gt;exclude&lt;/span&gt; while crawling. For example:&lt;/p&gt;&lt;p&gt;example.com/pattern/*&lt;/p&gt;&lt;p&gt;Do not enter spaces. Leave blank to crawl all urls.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="119"/>
        <location filename="../src/forms/dialogwebcrawler.ui" line="148"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Set the max links inside a page to be followed and crawled by SocNetV.&lt;/p&gt;&lt;p&gt;Set this to zero if you don&apos;t want to have this limit. In this case SocNetV will follow and crawl every link found in a page.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="122"/>
        <source>Max links in each page to follow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="165"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Links to social media domains&lt;/span&gt;&lt;/p&gt;&lt;p&gt;If enabled, the crawler will map (and possibly crawl) &lt;span style=&quot; font-weight:600;&quot;&gt;links to social media websites&lt;/span&gt;, such as twitter.com.&lt;/p&gt;&lt;p&gt;If disabled, the crawler will diregard any link to URLs in the following domains:&lt;/p&gt;&lt;p&gt;facebook.com&lt;br/&gt;twitter.com&lt;br/&gt;linkedin.com&lt;br/&gt;instagram.com&lt;br/&gt;pinterest.com&lt;br/&gt;telegram.org&lt;br/&gt;telegram.me&lt;br/&gt;youtube.com&lt;br/&gt;reddit.com&lt;br/&gt;plus.google.com&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Note&lt;/span&gt;: You can exclude more social media or define your custom social media exclusion list by typing domains in the &amp;quot;URL patterns to exclude&amp;quot; text edit above.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="168"/>
        <source>Links to social media</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="178"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;If enabled the application will draw a &lt;span style=&quot; font-weight:600;&quot;&gt;self-link&lt;/span&gt; when a page contains a link to itself. &lt;/p&gt;&lt;p&gt;Default is not to allow self-links.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="181"/>
        <source>Allow Self-Links</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="208"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Show external links&lt;/span&gt;&lt;/p&gt;&lt;p&gt;If enabled, the crawler will map &lt;span style=&quot; font-weight:600;&quot;&gt;links to external domains&lt;/span&gt;. &lt;/p&gt;&lt;p&gt;For instance, if this option is enabled and you start crawling www.supersyntages.gr where there is a link to a page of a different domain, i.e. www.aggelies247.com/news, then a node &amp;quot;www.aggelies247.com/news&amp;quot; will be added to the network. &lt;/p&gt;&lt;p&gt;If you don&apos;t want to show external links at all, just disable this option. &lt;/p&gt;&lt;p&gt;Please note that you &lt;span style=&quot; font-weight:600;&quot;&gt;MUST &lt;/span&gt;enable either this option or the &amp;quot;Include internal links&amp;quot; option, for the crawler to work.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="211"/>
        <source>Show external links</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="221"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Crawl external links&lt;/span&gt;&lt;/p&gt;&lt;p&gt;If enabled, the crawler will &lt;span style=&quot; font-weight:600;&quot;&gt;map external links AND crawl them for new links as well.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;For instance, if you enable this option and start crawling the page at https://www.supersyntages.gr where there is a link to another domain, i.e. www.linuxinsider.gr, then the crawler will visit linuxinsider.gr too to find more links. &lt;/p&gt;&lt;p&gt;If you don&apos;t want to crawl external links, disable this option. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="224"/>
        <source>Crawl external links</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="234"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Wait for a random number of milliseconds (&lt;span style=&quot; font-weight:600;&quot;&gt;0-1000&lt;/span&gt;) between network requests. &lt;/p&gt;&lt;p&gt;Use of this option is recommended, as it lightens the server load by making the requests less frequent.&lt;/p&gt;&lt;p&gt;By default this option is enabled.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="237"/>
        <source>Delay between requests</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="267"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Use the built-in web crawler to scan the HTML code of a given initial URL (i.e. a website) and map all internal or external links to other pages found there. &lt;/p&gt;&lt;p&gt;As new URLs are discovered, the crawler follows them to scan their HTML code for links as well. For more details, see the Manual. &lt;/p&gt;&lt;p&gt;Enter the initial URL below and change crawling parameters if you like.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="282"/>
        <source>Initial URL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="320"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter the initial url/domain to start crawling from, i.e. https://socnetv.org&lt;/p&gt;&lt;p&gt;You may omit https:// if you want. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="337"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Set the total urls to be crawled. &lt;/p&gt;&lt;p&gt;This is the total nodes the result network will have. &lt;/p&gt;&lt;p&gt;Set value to 0, if you don&apos;t want any limits...&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="340"/>
        <source>Max URLs  to crawl</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/dialogwebcrawler.ui" line="366"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Set the total URLs to be crawled. &lt;/p&gt;&lt;p&gt;This is the &lt;span style=&quot; font-weight:600;&quot;&gt;maximum nodes&lt;/span&gt; the result network will have. &lt;/p&gt;&lt;p&gt;Set value to 0, if you don&apos;t want any limits...&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EdgeEditDialog</name>
    <message>
        <location filename="../src/forms/edgeeditdialog.ui" line="20"/>
        <source>Node Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/edgeeditdialog.ui" line="33"/>
        <source>Enter node label </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/edgeeditdialog.ui" line="61"/>
        <source>Enter node value (disabled)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/edgeeditdialog.ui" line="107"/>
        <source>Select line shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/edgeeditdialog.ui" line="236"/>
        <source>Select link color (click the button)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/edgeeditdialog.ui" line="272"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/forms/edgeeditdialog.ui" line="294"/>
        <source>Select the link weight (default 1)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EdgeTableModel</name>
    <message>
        <location filename="../src/widgets/edgetablemodel.cpp" line="161"/>
        <source>Source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/edgetablemodel.cpp" line="162"/>
        <source>Target</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/edgetablemodel.cpp" line="163"/>
        <source>Relation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/edgetablemodel.cpp" line="164"/>
        <source>Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/edgetablemodel.cpp" line="165"/>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/edgetablemodel.cpp" line="166"/>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FilterBarWidget</name>
    <message>
        <location filename="../src/widgets/filterbarwidget.cpp" line="40"/>
        <source>Clear all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/filterbarwidget.cpp" line="70"/>
        <location filename="../src/widgets/filterbarwidget.cpp" line="150"/>
        <source>Remove this filter</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Graph</name>
    <message>
        <location filename="../src/graph/centrality/graph_centrality.cpp" line="124"/>
        <source>Computing Information Centralities. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality.cpp" line="150"/>
        <source>Computing inverse adjacency matrix. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality.cpp" line="163"/>
        <source>Information Centrality is not defined: the weight matrix is singular.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality.cpp" line="173"/>
        <source>Computing IC scores. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality.cpp" line="352"/>
        <source>Calculating EVC scores...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality.cpp" line="394"/>
        <source>Computing Eigenvector Centrality scores. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality.cpp" line="401"/>
        <source>Computing outDegrees. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality.cpp" line="441"/>
        <source>Leading eigenvector computed. Analysing centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality.cpp" line="531"/>
        <source>Computing out-Degree Centralities for %1 nodes. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality.cpp" line="746"/>
        <source>Computing Influence Range Centrality scores. 
Please wait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_bonacich.cpp" line="70"/>
        <source>Calculating Bonacich Power Centrality scores...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_bonacich.cpp" line="113"/>
        <source>Bonacich Power Centrality is not defined for beta = %1: it must satisfy |beta| &lt; %2 (1 / the network&apos;s largest eigenvalue), or the underlying computation does not converge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_bonacich.cpp" line="127"/>
        <source>Computing Bonacich Power Centrality scores. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_bonacich.cpp" line="159"/>
        <source>Inverting (I - beta*R). Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_bonacich.cpp" line="171"/>
        <source>Bonacich Power Centrality is not defined: (I - beta*R) is singular.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_katz.cpp" line="73"/>
        <source>Calculating Katz Centrality scores...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_katz.cpp" line="115"/>
        <source>Katz Centrality is not defined for alpha = %1: it must satisfy |alpha| &lt; %2 (1 / the network&apos;s largest eigenvalue), or the underlying computation does not converge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_katz.cpp" line="129"/>
        <source>Computing Katz Centrality scores. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_katz.cpp" line="148"/>
        <source>Inverting (I - alpha*A^T). Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_katz.cpp" line="159"/>
        <source>Katz Centrality is not defined: (I - alpha*A^T) is singular.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_pn.cpp" line="65"/>
        <source>Calculating PN Centrality scores...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_pn.cpp" line="86"/>
        <source>PN Centrality mode &quot;All&quot; is only valid on an undirected network - pick Out or In for a directed network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_pn.cpp" line="101"/>
        <source>PN Centrality mode &quot;Out&quot;/&quot;In&quot; is only valid on a directed network - pick All for an undirected network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_pn.cpp" line="120"/>
        <source>Computing PN Centrality scores. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_pn.cpp" line="198"/>
        <source>PN Centrality is not defined for this network: the underlying matrix is singular.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_centrality_signed_degree.cpp" line="64"/>
        <source>Computing Signed Degree Centralities. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_prestige.cpp" line="82"/>
        <source>Computing Degree Prestige (in-Degree). 
 Please wait ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_prestige.cpp" line="314"/>
        <source>Computing Proximity Prestige scores. 
Please wait ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/centrality/graph_prestige.cpp" line="484"/>
        <source>Computing PageRank Prestige scores. 
Please wait ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/clustering/graph_clustering_coefficients.cpp" line="279"/>
        <source>Computing Clustering Coefficient. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/clustering/graph_clustering_hierarchical.cpp" line="179"/>
        <source>Computing Hierarchical Clustering. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/clustering/graph_triad_census.cpp" line="89"/>
        <source>Computing Triad Census. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/cohesion/graph_cliques.cpp" line="257"/>
        <source>Finding cliques: Recursive backtracking for actor </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/core/graph_state_flags.cpp" line="52"/>
        <source>Checking if the graph edges are valued. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/core/graph_state_flags.cpp" line="108"/>
        <source>Checking if the graph has negative edge weights. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/core/graph_structure_metrics.cpp" line="224"/>
        <source>Calculating the Arc Reciprocity of the graph...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/crawler/graph_crawler.cpp" line="86"/>
        <source>web</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/distances/graph_distance_facade.cpp" line="196"/>
        <source>GEODESIC DISTANCE DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/distances/graph_distance_facade.cpp" line="199"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="102"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="294"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="601"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="813"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1026"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1206"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1415"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1647"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1757"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1886"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2125"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2320"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2561"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2760"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2947"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3174"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3410"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3591"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3778"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3901"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4096"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4236"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4602"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4977"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5145"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5334"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6030"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6583"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6724"/>
        <source>Network name: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/distances/graph_distance_facade.cpp" line="202"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="107"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="299"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="606"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="818"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1031"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1211"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1420"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1652"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1762"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1891"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2130"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2325"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2566"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2765"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2952"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3179"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3415"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3596"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3783"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3906"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4101"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4241"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4607"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4982"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5150"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5339"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6035"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6588"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6729"/>
        <source>Actors: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/distances/graph_distance_facade.cpp" line="207"/>
        <source>No connected pairs found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/distances/graph_distance_facade.cpp" line="214"/>
        <source>Number of ordered pairs of connected nodes separated by each geodesic distance &lt;em&gt;d&lt;/em&gt;.  Unreachable pairs are excluded.  Diameter of this network: &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/distances/graph_distance_facade.cpp" line="223"/>
        <source>Distance (d)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/distances/graph_distance_facade.cpp" line="224"/>
        <source>Pairs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/distances/graph_distance_facade.cpp" line="225"/>
        <source>% of connected pairs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/distances/graph_distance_facade.cpp" line="226"/>
        <source>Cumulative %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_edge_filters.cpp" line="167"/>
        <source>Edges with weight %1 %2 have been filtered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_edge_filters.cpp" line="205"/>
        <source>All edges restored.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_edge_filters.cpp" line="229"/>
        <source>Unilateral edges have been temporarily disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_edge_filters.cpp" line="268"/>
        <source>No edges found matching: %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_edge_filters.cpp" line="327"/>
        <source>Showing %1 edge(s) matching: %2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_node_filters.cpp" line="68"/>
        <source>Please compute the selected centrality/prestige index first, then apply the filter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_node_filters.cpp" line="248"/>
        <source>Filter applied: vertices with score %1 %2 are now hidden.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_node_filters.cpp" line="394"/>
        <source>Showing ego network of node %1 (%2 neighbors).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_node_filters.cpp" line="419"/>
        <source>No nodes selected. Please select at least one node first.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_node_filters.cpp" line="521"/>
        <source>Showing %1 selected node(s) and edges between them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_node_filters.cpp" line="557"/>
        <source>No nodes found matching: %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_node_filters.cpp" line="643"/>
        <source>Showing %1 node(s) matching: %2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_node_filters.cpp" line="662"/>
        <source>No active filter to restore.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_node_filters.cpp" line="667"/>
        <source>Graph visibility restored.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_node_filters.cpp" line="773"/>
        <source>Filter removed; %1 filter(s) still active.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_query_filters.cpp" line="59"/>
        <source>No nodes match all %1 condition(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_query_filters.cpp" line="128"/>
        <source>Query: showing %1 node(s) matching all %2 condition(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_query_filters.cpp" line="179"/>
        <source>No edges match all %1 condition(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/filters/graph_query_filters.cpp" line="245"/>
        <source>Query: showing %1 edge(s) matching all %2 condition(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/generators/graph_random_networks.cpp" line="170"/>
        <source>erdos-renyi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/generators/graph_random_networks.cpp" line="233"/>
        <source>Creating Scale-Free Random Network. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/generators/graph_random_networks.cpp" line="346"/>
        <source>scale-free</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/generators/graph_random_networks.cpp" line="393"/>
        <source>Creating Small-World Random Network. 
Please wait ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/generators/graph_random_networks.cpp" line="436"/>
        <source>small-world</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/generators/graph_random_networks.cpp" line="487"/>
        <source>Creating pseudo-random d-regular network. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/generators/graph_random_networks.cpp" line="587"/>
        <source>d-regular</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/generators/graph_random_networks.cpp" line="622"/>
        <source>Creating ring-lattice network. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/generators/graph_random_networks.cpp" line="655"/>
        <source>ring-lattice</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/generators/graph_random_networks.cpp" line="724"/>
        <source>Creating lattice network. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/generators/graph_random_networks.cpp" line="837"/>
        <source>lattice</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/io/graph_io.cpp" line="336"/>
        <location filename="../src/graph/io/graph_io.cpp" line="546"/>
        <location filename="../src/graph/io/graph_io.cpp" line="589"/>
        <location filename="../src/graph/io/graph_io.cpp" line="772"/>
        <location filename="../src/graph/io/graph_io.cpp" line="1212"/>
        <location filename="../src/graph/io/graph_io.cpp" line="1309"/>
        <location filename="../src/graph/io/graph_io.cpp" line="1376"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="45"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="240"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="546"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="761"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="977"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1157"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1361"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1606"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1714"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1828"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2072"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2261"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2502"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2701"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2889"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3120"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3358"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3539"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3738"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3863"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4026"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4190"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4535"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4932"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5086"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5273"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5435"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5777"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6521"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6698"/>
        <source>Error. Could not write to </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/io/graph_io.cpp" line="525"/>
        <location filename="../src/graph/io/graph_io.cpp" line="687"/>
        <location filename="../src/graph/io/graph_io.cpp" line="1184"/>
        <location filename="../src/graph/io/graph_io.cpp" line="1286"/>
        <location filename="../src/graph/io/graph_io.cpp" line="1353"/>
        <location filename="../src/graph/io/graph_io.cpp" line="1414"/>
        <source>File %1 saved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/io/graph_io.cpp" line="562"/>
        <source>Adjacency matrix-formatted network saved into file %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_basic.cpp" line="35"/>
        <source>Embedding Random Layout. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_basic.cpp" line="77"/>
        <source>Embedding Random Radial layout. 
Please wait ....</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_basic.cpp" line="153"/>
        <source>Applying circular layout. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_basic.cpp" line="261"/>
        <source>Computing centrality/prestige scores. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_basic.cpp" line="305"/>
        <source>Please compute Katz Centrality first (Analyze &gt; Centrality &gt; Katz Centrality), then try this layout again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_basic.cpp" line="315"/>
        <source>Please compute Bonacich Power Centrality first (Analyze &gt; Centrality &gt; Bonacich Power Centrality), then try this layout again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_basic.cpp" line="329"/>
        <source>Signed Degree Centrality has no single score to lay out by yet - use Analyze &gt; Centrality and Prestige indices &gt; Signed Degree Centrality for its report instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_basic.cpp" line="352"/>
        <source>Embedding Radial layout by Prominence Score. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_basic.cpp" line="357"/>
        <source>Embedding Level layout by Prominence Score. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_basic.cpp" line="362"/>
        <source>Embedding Node Size by Prominence Score layout. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_basic.cpp" line="367"/>
        <source>Embedding Node Color by Prominence Score layout. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_basic.cpp" line="694"/>
        <source>Ego radial layout: vertex %1 not found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_basic.cpp" line="711"/>
        <source>Embedding Ego Radial layout. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_force.cpp" line="121"/>
        <source>Embedding Eades Spring-Gravitational model. 
Please wait ....</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_force.cpp" line="290"/>
        <source>Embedding Fruchterman &amp; Reingold forces model. 
Please wait ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/layouts/graph_layouts_force.cpp" line="555"/>
        <source>Embedding Kamada &amp; Kawai spring model.
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/matrices/graph_matrix_adjacency.cpp" line="55"/>
        <source>Creating Adjacency Matrix. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/matrices/graph_matrix_adjacency.cpp" line="155"/>
        <source>Creating signed A = P - 2N matrix. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/matrices/graph_matrix_distances.cpp" line="95"/>
        <source>Creating shortest paths matrix. 
Please wait </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/matrices/graph_matrix_distances.cpp" line="190"/>
        <source>Creating geodesic distances matrix. 
Please wait </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/matrices/graph_matrix_reachability.cpp" line="45"/>
        <source>Creating reachability matrix. 
Please wait </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/matrices/graph_matrix_reachability.cpp" line="114"/>
        <source>Computing walks of length %1. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/matrices/graph_matrix_reachability.cpp" line="128"/>
        <source>Computing sociomatrix powers up to %1. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/matrices/graph_matrix_reachability.cpp" line="133"/>
        <source>Computing all sociomatrix powers up to %1. Now computing A^%2. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/prominence/graph_prominence_distribution.cpp" line="188"/>
        <source>Computing Centrality Distribution. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/prominence/graph_prominence_distribution.cpp" line="301"/>
        <source>Creating prominence index distribution line chart...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/prominence/graph_prominence_distribution.cpp" line="305"/>
        <source>Creating prominence index distribution area chart...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/prominence/graph_prominence_distribution.cpp" line="309"/>
        <source>Creating prominence index distribution bar chart...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/relations/graph_relations.cpp" line="201"/>
        <source>Added a new relation named: %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="89"/>
        <source>Writing Reciprocity to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="97"/>
        <source>RECIPROCITY (r) REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="113"/>
        <source>Reciprocity, &lt;b&gt;r&lt;/b&gt;, is a measure of the likelihood of vertices in a directed network to be mutually linked. &lt;br /&gt;SocNetV supports two different methods to index the degree of reciprocity in a social network: &lt;br /&gt;- The arc reciprocity, which is the fraction of reciprocated ties over all actual ties in the network. &lt;br /&gt;- The dyad reciprocity which is the fraction of actor pairs that have reciprocated ties over all pairs of actors that have any connection. &lt;br /&gt;In a directed network, the arc reciprocity measures the proportion of directed edges that are bidirectional. If the reciprocity is 1, then the adjacency matrix is structurally symmetric. &lt;br /&gt;Likewise, in a directed network, the dyad reciprocity measures the proportion of connected actor dyads that have bidirectional ties between them. &lt;br /&gt;In an undirected graph, all edges are reciprocal. Thus the reciprocity of the graph is always 1. &lt;br /&gt;Reciprocity can be computed on undirected, directed, and weighted graphs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="136"/>
        <source>r range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="138"/>
        <source>0 &amp;le; r &amp;le; 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="143"/>
        <source>Arc reciprocity: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="145"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="154"/>
        <source>%1 / %2 = %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="147"/>
        <source>Of all actual ties in the network, %1% are reciprocated.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="152"/>
        <source>Dyad reciprocity: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="156"/>
        <source>Of all pairs of actors that have any ties, %1% have a reciprocated connection.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="162"/>
        <source>Reciprocity proportions per actor: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="170"/>
        <source>Symmetric </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="172"/>
        <source>Proportion of reciprocated ties involving the actor to the total incoming and outgoing ties.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="175"/>
        <source>nonSymmetric </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="177"/>
        <source>One minus symmetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="180"/>
        <source>nonSym Out/NonSym </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="182"/>
        <source>Proportion of non-symmetric outgoing ties to the total non-symmetric ties.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="185"/>
        <source>nonSym In/NonSym </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="187"/>
        <source>Proportion of non-symmetric incoming ties to the total non-symmetric ties.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="190"/>
        <source>nonSym Out/Out </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="192"/>
        <source>Proportion of non-symmetric outgoing ties to the total outgoing ties.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="195"/>
        <source>nonSym In/In </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="197"/>
        <source>Proportion of non-symmetric incoming ties to the total incoming ties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="203"/>
        <source>Reciprocity Report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="204"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="378"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="724"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="937"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1125"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1324"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1563"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1672"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1787"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2035"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2224"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2465"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2664"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2852"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3085"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3320"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3506"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3697"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3832"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3996"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4151"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4471"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4672"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5042"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5235"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5404"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6217"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6664"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6827"/>
        <source>Created by &lt;a href=&quot;https://socnetv.org&quot; target=&quot;_blank&quot;&gt;Social Network Visualizer&lt;/a&gt; v%1: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="208"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="382"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="728"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="941"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1129"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1328"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1567"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1676"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1791"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2039"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2228"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2469"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2668"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2856"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3089"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3324"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3510"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3701"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3836"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4000"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4155"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4475"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4676"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5046"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5239"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5408"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6221"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6668"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6831"/>
        <source>Computation time: %1 msecs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="253"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="556"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="770"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="986"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1166"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1370"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1615"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1723"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1837"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2081"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2270"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2511"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2710"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2898"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3129"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3367"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3548"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3749"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3874"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4045"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4219"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4550"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4559"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4650"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4664"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5791"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5802"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5813"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5823"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5833"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5844"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5854"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5866"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5877"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5892"/>
        <source>Computation canceled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="259"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1843"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2276"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2517"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2716"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2904"/>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="1003"/>
        <source>Computation refused: the network contains negative edge weight(s), which this measure does not support.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="281"/>
        <source>Writing Eccentricity scores to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="289"/>
        <source>ECCENTRICITY (e) REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="305"/>
        <source>The eccentricity &lt;em&gt;e&lt;/em&gt; measures how far, at most, is each  node from every other node. &lt;br /&gt;In a connected graph, the eccentricity &lt;em&gt;e&lt;/em&gt; of a vertex is the maximum geodesic distance between that vertex and all other vertices. &lt;br /&gt;In a disconnected graph, the eccentricity &lt;em&gt;e&lt;/em&gt; of all vertices is considered to be infinite.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="315"/>
        <source>e range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="317"/>
        <source>1 &amp;le; e &amp;le; ∞</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="333"/>
        <source>All nodes have the same eccentricity.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="340"/>
        <source>Max e (Graph Diameter) = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="345"/>
        <source>Min e (Graph Radius) = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="350"/>
        <source>e classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="358"/>
        <source>e = 1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="360"/>
        <source>when the node is connected to all others (star node).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="363"/>
        <source>e &gt; 1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="365"/>
        <source>when the node is not directly connected to all others. Larger eccentricity means the actor is farther from others.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="369"/>
        <source>e = ∞ </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="371"/>
        <source>there is no path from that node to one or more other nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="377"/>
        <source>Eccentricity Report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="427"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="494"/>
        <source>Node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="427"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="494"/>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="588"/>
        <source>Writing Information Centralities to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="596"/>
        <source>INFORMATION CENTRALITY (IC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="612"/>
        <source>The IC index, introduced by Stephenson and Zelen (1991), measures the information flow through all paths between actors weighted by strength of tie and distance.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="616"/>
        <source>IC&apos; is the standardized index (IC divided by the sumIC).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="618"/>
        <source>Warning: To compute this index, SocNetV drops all isolated nodes and symmetrizes (if needed) the adjacency matrix. &lt;br /&gt;Read the Manual for more.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="625"/>
        <source>IC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="627"/>
        <source>0 &amp;le; IC &amp;le; ∞</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="632"/>
        <source>IC&apos; range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="634"/>
        <source>0 &amp;le; IC&apos; &amp;le; 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="648"/>
        <source>All nodes have the same IC score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="655"/>
        <source>Max IC&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="660"/>
        <source>Min IC&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="665"/>
        <source>IC classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="673"/>
        <source>IC&apos; Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="678"/>
        <source>IC&apos; Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="683"/>
        <source>IC&apos; Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="692"/>
        <source>IC&apos; DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="701"/>
        <source>GROUP INFORMATION CENTRALIZATION (GIC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="705"/>
        <source>Since there is no way to compute Group Information Centralization, &lt;br /&gt;you can use Variance as a general centralization index. &lt;br /&gt;&lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="708"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="922"/>
        <source>Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="714"/>
        <source>Variance = 0, when all nodes have the same IC value, i.e. a complete or a circle graph). &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="716"/>
        <source>Larger values of variance suggest larger variability between the IC&apos; values. &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="723"/>
        <source>Information Centrality report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="800"/>
        <source>Writing Eigenvector Centrality scores to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="808"/>
        <source>EIGENVECTOR CENTRALITY (EVC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="824"/>
        <source>The Eigenvector Centrality of each node is the i&lt;sub&gt;th&lt;/sub&gt; element of the leading eigenvector of the adjacency matrix, that is the eigenvector corresponding to the largest positive eigenvalue. &lt;br /&gt;Proposed by Bonacich (1972), the Eigenvector Centrality is an extension of the simpler Degree Centrality because it gives each actor a score proportional to the scores of its neighbors. Thus, a node may have high EVC score if it has lots of ties or it has ties to other nodes with high EVC. &lt;br /&gt;The eigenvector centralities are also known as Gould indices.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="834"/>
        <source>EVC&apos; is the scaled EVC (EVC divided by max EVC).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="836"/>
        <source>EVC&apos;&apos; is the standardized index (EVC divided by the sum of all EVCs).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="842"/>
        <source>EVC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="844"/>
        <source>0 &amp;le; EVC &amp;lt; 1 (The eigenvector has unit euclidean length) </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="849"/>
        <source>EVC&apos; range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="851"/>
        <source>0 &amp;le; EVC&apos; &amp;le; 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="862"/>
        <source>All nodes have the same EVC score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="869"/>
        <source>Max EVC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="874"/>
        <source>Min EVC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="879"/>
        <source>EVC classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="887"/>
        <source>EVC Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="892"/>
        <source>EVC Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="897"/>
        <source>EVC Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="906"/>
        <source>EVC&apos; DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="915"/>
        <source>GROUP EIGENVECTOR CENTRALIZATION (GEC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="919"/>
        <source>Since there is no way to compute Group Eigenvector Centralization, &lt;br /&gt;you can use Variance as a general centralization index. &lt;br /&gt;&lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="928"/>
        <source>Variance = 0, when all nodes have the same EVC value, i.e. a complete or a circle graph). &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="930"/>
        <source>Larger values of variance suggest larger variability between the EVC&apos; values. &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="936"/>
        <source>Eigenvector Centrality report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1013"/>
        <source>Writing Katz Centrality scores to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1021"/>
        <source>KATZ CENTRALITY (KC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1036"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1216"/>
        <source>Alpha: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1042"/>
        <source>Katz Centrality gives each actor credit for indirect connections, not just direct ones, discounted the further away they are: a direct tie counts full price, a 2-hop tie counts alpha times as much, a 3-hop tie counts alpha&lt;sup&gt;2&lt;/sup&gt; times as much, and so on. &lt;br /&gt;Proposed by Katz (1953), it generalizes Degree Centrality by counting walks of every length, not just length 1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1049"/>
        <source>KC&apos; is the scaled KC (KC divided by max KC).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1051"/>
        <source>KC&apos;&apos; is the standardized index (KC divided by the sum of all KCs).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1057"/>
        <source>KC&apos; range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1059"/>
        <source>0 &amp;le; KC&apos; &amp;le; 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1070"/>
        <source>All nodes have the same KC score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1077"/>
        <source>Max KC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1082"/>
        <source>Min KC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1087"/>
        <source>KC classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1095"/>
        <source>KC Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1100"/>
        <source>KC Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1105"/>
        <source>KC Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1114"/>
        <source>KC&apos; DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1124"/>
        <source>Katz Centrality report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1193"/>
        <source>Writing Bonacich Power Centrality scores to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1201"/>
        <source>BONACICH POWER CENTRALITY (BPC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1221"/>
        <source>Beta: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1227"/>
        <source>Bonacich Power Centrality is like Katz Centrality - credit for indirect connections, discounted the further away they are - but beta can be negative, in which case being tied to well-connected others &lt;i&gt;hurts&lt;/i&gt; rather than helps a node&apos;s score (e.g. a buyer connected to powerful sellers has less bargaining power the more powerful those sellers are). alpha is a free overall scale factor that does not change the ranking, only the numbers&apos; size.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1235"/>
        <source>BPC&apos; is the scaled BPC (BPC divided by max BPC).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1237"/>
        <source>BPC&apos;&apos; is the standardized index (BPC divided by the sum of all BPCs).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1245"/>
        <source>Note: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1247"/>
        <source>beta is negative, so BPC scores may be negative and BPC&apos; is not guaranteed to fall within [0, 1].</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1255"/>
        <source>BPC&apos; range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1257"/>
        <source>0 &amp;le; BPC&apos; &amp;le; 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1269"/>
        <source>All nodes have the same BPC score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1276"/>
        <source>Max BPC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1281"/>
        <source>Min BPC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1286"/>
        <source>BPC classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1294"/>
        <source>BPC Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1299"/>
        <source>BPC Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1304"/>
        <source>BPC Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1313"/>
        <source>BPC&apos; DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1323"/>
        <source>Bonacich Power Centrality report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1406"/>
        <source>Writing out-Degree Centralities. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1410"/>
        <source>DEGREE CENTRALITY (DC) REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1426"/>
        <source>In undirected networks, the DC index is the sum of edges attached to a node u. &lt;br /&gt;In directed networks, the index is the sum of outbound arcs from node u to all adjacent nodes (also called &quot;outDegree Centrality&quot;). &lt;br /&gt;If the network is weighted, the DC score is the sum of weights of outbound edges from node u to all adjacent nodes.&lt;br /&gt;Note: To compute inDegree Centrality, use the Degree Prestige measure.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1433"/>
        <source>DC&apos; is the standardized index (DC divided by N-1 (non-valued nets) or by sumDC (valued nets).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1438"/>
        <source>DC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1440"/>
        <source>0 &amp;le; DC &amp;le; </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1449"/>
        <source>DC&apos; range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1451"/>
        <source>0 &amp;le; DC&apos; &amp;le; 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1465"/>
        <source>All nodes have the same DC score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1472"/>
        <source>DC Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1479"/>
        <source>Max DC&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1484"/>
        <source>Min DC&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1489"/>
        <source>DC&apos; classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1497"/>
        <source>DC&apos; Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1502"/>
        <source>DC&apos; Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1507"/>
        <source>DC&apos; Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1516"/>
        <source>DC&apos; DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1527"/>
        <source>GROUP DEGREE CENTRALIZATION (GDC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1531"/>
        <source>GDC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1538"/>
        <source>GDC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1544"/>
        <source>GDC = 0, when all out-degrees are equal (i.e. regular lattice).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1546"/>
        <source>GDC = 1, when one node completely dominates or overshadows the other nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1555"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2027"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2457"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3077"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3312"/>
        <source>Because this graph is weighted, we cannot compute Group Centralization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1557"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2029"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2459"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3314"/>
        <source>You can use variance as a group-level centralization measure.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1562"/>
        <source>Degree Centrality report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1639"/>
        <source>Writing Signed Degree Centralities. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1642"/>
        <source>SIGNED DEGREE CENTRALITY REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1658"/>
        <source>Out-degree split by tie sign, for signed networks. pos is how many positive ties a node sends (or their summed strength, if weights are considered); neg is the same for negative ties; ratio = pos / (pos+neg), the fraction of a node&apos;s ties that are positive (0 for a node with no ties either way); net = pos - neg, a single signed balance score.&lt;br /&gt;Out-degree only: to compute in-degree, use the Degree Prestige measure.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1671"/>
        <source>Signed Degree Centrality report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1747"/>
        <source>Writing PN Centrality scores. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1750"/>
        <source>PN CENTRALITY REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1753"/>
        <source>Out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1753"/>
        <source>In</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1753"/>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1767"/>
        <source>Mode: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1773"/>
        <source>A centrality measure built for signed networks: a negative tie from someone who is themselves highly (positively) prominent hurts more than one from someone marginalized - a negative tie from someone universally disliked can even read as a positive signal. Considers tie sign only (positive/negative); tie strength is not used.&lt;br /&gt;Everett, M. and Borgatti, S. (2014). Networks containing negative ties. Social Networks 38, 111-120.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1786"/>
        <source>PN Centrality report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1873"/>
        <source>Writing Closeness Centrality scores to file. 
Please wait ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1881"/>
        <source>CLOSENESS CENTRALITY (CC) REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1897"/>
        <source>The CC index is the inverted sum of geodesic distances from each node u to all other nodes. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1900"/>
        <source>Note: The CC index considers outbound arcs only and isolate nodes are dropped by default. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1903"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2335"/>
        <source>Read the Manual for more.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1905"/>
        <source>CC&apos; is the standardized index (CC multiplied by (N-1 minus isolates)).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1910"/>
        <source>CC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1912"/>
        <source>0 &amp;le; CC &amp;le; </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1913"/>
        <source> ( 1 / Number of node pairs excluding u)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1918"/>
        <source>CC&apos; range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1920"/>
        <source>0 &amp;le; CC&apos; &amp;le; 1  (CC&apos;=1 when a node is the center of a star graph)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1934"/>
        <source>All nodes have the same CC score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1941"/>
        <source>CC Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1948"/>
        <source>Max CC&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1953"/>
        <source>Min CC&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1958"/>
        <source>CC&apos; classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1966"/>
        <source>CC&apos; Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1971"/>
        <source>CC&apos; Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1976"/>
        <source>CC&apos; Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1985"/>
        <source>CC&apos; DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="1996"/>
        <source>GROUP CLOSENESS CENTRALIZATION (GCC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2000"/>
        <source>GCC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2007"/>
        <source>GCC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2013"/>
        <source>GCC = 0, when the lengths of the geodesics are all equal, i.e. a complete or a circle graph.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2016"/>
        <source>GCC = 1, when one node has geodesics of length 1 to all the other nodes, and the other nodes have geodesics of length 2. to the remaining (N-2) nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2020"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2450"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3305"/>
        <source>This is exactly the situation realised by a star graph.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2034"/>
        <source>Closeness Centrality report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2111"/>
        <source>Writing Influence Range Centrality scores. 
Please wait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2120"/>
        <source>INFLUENCE RANGE CLOSENESS CENTRALITY (IRCC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2136"/>
        <source>The IRCC index of a node u is the ratio of the fraction of nodes reachable by node u to the average distance of these nodes from u  (Wasserman &amp; Faust, formula 5.22, p. 201)&lt;br /&gt;Thus, this measure is similar to Closeness Centrality but it counts only outbound distances from each actor to other reachable nodes. &lt;br /&gt;This measure is useful for directed networks which are not strongly connected (thus the ordinary CC index cannot be computed).&lt;br /&gt;In undirected networks, the IRCC has the same properties and yields the same results as the ordinary Closeness Centrality.&lt;br /&gt;Read the Manual for more. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2148"/>
        <source>IRCC is standardized.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2153"/>
        <source>IRCC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2155"/>
        <source>0 &amp;le; IRCC &amp;le; 1  (IRCC is a ratio)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2169"/>
        <source>All nodes have the same IRCC score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2176"/>
        <source>Max IRCC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2181"/>
        <source>Min IRCC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2186"/>
        <source>IRCC classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2194"/>
        <source>IRCC Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2199"/>
        <source>IRCC Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2204"/>
        <source>IRCC Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2213"/>
        <source>IRCC DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2223"/>
        <source>Influence Range Closeness Centrality report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2307"/>
        <source>Writing Betweenness Centrality scores to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2315"/>
        <source>BETWEENNESS CENTRALITY (BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2331"/>
        <source>The BC index of a node u is the sum of &amp;delta;&lt;sub&gt;(s,t,u)&lt;/sub&gt; for all s,t &amp;isin; V </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2332"/>
        <source>where &amp;delta;&lt;sub&gt;(s,t,u)&lt;/sub&gt; is the ratio of all geodesics between s and t which run through u. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2337"/>
        <source>BC&apos; is the standardized index (BC divided by (N-1)(N-2)/2 in symmetric nets or (N-1)(N-2) otherwise.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2342"/>
        <source>BC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2344"/>
        <source>0 &amp;le; BC &amp;le; </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2345"/>
        <source> (Number of pairs of nodes excluding u)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2350"/>
        <source>BC&apos; range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2352"/>
        <source>0 &amp;le; BC&apos; &amp;le; 1  (BC&apos;=1 when the node falls on all geodesics)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2366"/>
        <source>All nodes have the same BC score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2373"/>
        <source>BC Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2380"/>
        <source>Max BC&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2385"/>
        <source>Min BC&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2390"/>
        <source>BC&apos; classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2398"/>
        <source>BC&apos; Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2403"/>
        <source>BC&apos; Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2408"/>
        <source>BC&apos; Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2417"/>
        <source>BC&apos; DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2428"/>
        <source>GROUP BETWEENNESS CENTRALIZATION (GBC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2432"/>
        <source>GBC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2439"/>
        <source>GBC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2445"/>
        <source>GBC = 0, when all the nodes have exactly the same betweenness index.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2447"/>
        <source>GBC = 1, when one node falls on all other geodesics between all the remaining (N-1) nodes. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2464"/>
        <source>Betweenness Centrality report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2548"/>
        <source>Writing Stress Centralities. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2556"/>
        <source>STRESS CENTRALITY (SC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2572"/>
        <source>The SC index of each node u is the sum of &amp;sigma;&lt;sub&gt;(s,t,u)&lt;/sub&gt;): &lt;br /&gt;the number of geodesics from s to t through u.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2575"/>
        <source>SC&apos; is the standardized index (SC divided by sumSC).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2580"/>
        <source>SC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2582"/>
        <source>0 &amp;le; SC &amp;le; </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2587"/>
        <source>SC&apos; range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2589"/>
        <source>0 &amp;le; SC&apos; &amp;le; 1  (SC&apos;=1 when the node falls on all geodesics)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2603"/>
        <source>All nodes have the same SC score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2610"/>
        <source>SC Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2617"/>
        <source>Max SC&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2622"/>
        <source>Min SC&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2627"/>
        <source>BC classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2635"/>
        <source>SC&apos; Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2640"/>
        <source>SC&apos; Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2645"/>
        <source>SC&apos; Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2654"/>
        <source>SC&apos; DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2663"/>
        <source>Stress Centrality report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2747"/>
        <source>Writing Eccentricity Centralities to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2755"/>
        <source>ECCENTRICITY CENTRALITY (EC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2771"/>
        <source>The EC score of a node u is the inverse maximum geodesic distance from u to all other nodes in the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2774"/>
        <source>This index is also known as &lt;em&gt;Harary Graph Centrality&lt;/em&gt;. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2775"/>
        <source>EC is standardized.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2780"/>
        <source>EC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2782"/>
        <source>0 &amp;le; EC &amp;le; 1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2783"/>
        <source> (EC=1 when the actor has ties to all other nodes)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2797"/>
        <source>All nodes have the same EC score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2804"/>
        <source>Max EC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2809"/>
        <source>Min EC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2814"/>
        <source>EC classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2822"/>
        <source>EC Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2827"/>
        <source>EC Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2832"/>
        <source>EC Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2841"/>
        <source>EC DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2851"/>
        <source>Eccentricity Centrality report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2934"/>
        <source>Writing Gil-Schmidt Power Centralities to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2942"/>
        <source>POWER CENTRALITY (PC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2958"/>
        <source>The PC index, introduced by Gil and Schmidt, of a node u is the sum of the sizes of all Nth-order neighbourhoods with weight 1/n.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2961"/>
        <source>PC&apos; is the standardized index: The PC score divided by the total number of nodes in the same component minus 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2967"/>
        <source>PC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2969"/>
        <source>0 &amp;le; PC &amp;le; </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2974"/>
        <source>PC&apos; range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2976"/>
        <source>0 &amp;le; PC&apos; &amp;le; 1  (PC&apos;=1 when the node is connected to all (star).)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2990"/>
        <source>All nodes have the same PC score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="2997"/>
        <source>PC Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3004"/>
        <source>Max PC&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3009"/>
        <source>Min PC&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3014"/>
        <source>PC classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3022"/>
        <source>PC&apos; Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3027"/>
        <source>PC&apos; Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3032"/>
        <source>PC&apos; Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3041"/>
        <source>PC&apos; DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3052"/>
        <source>GROUP POWER CENTRALIZATION (GPC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3056"/>
        <source>GPC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3063"/>
        <source>GPC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3069"/>
        <source>GPC = 0, when all in-degrees are equal (i.e. regular lattice).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3071"/>
        <source>GPC = 1, when one node is linked to all other nodes (i.e. star). </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3079"/>
        <source>Use mean or variance instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3084"/>
        <source>Power Centrality report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3161"/>
        <source>Writing Degree Prestige (in-Degree) scores to file. 
Please wait ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3169"/>
        <source>DEGREE PRESTIGE (DP)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3185"/>
        <source>The DP index, also known as InDegree Centrality, of a node u is the sum of inbound edges to that node from all adjacent nodes. &lt;br /&gt;If the network is weighted, DP is the sum of inbound arc weights (Indegree) to node u from all adjacent nodes. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3190"/>
        <source>DP&apos; is the standardized index (DP divided by N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3195"/>
        <source>DP range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3197"/>
        <source>0 &amp;le; DP &amp;le; </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3206"/>
        <source>DP&apos; range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3208"/>
        <source>0 &amp;le; DP&apos; &amp;le; 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3222"/>
        <source>All nodes have the same DP score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3229"/>
        <source>DP Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3236"/>
        <source>Max DP&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3241"/>
        <source>Min DP&apos; = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3246"/>
        <source>DP&apos; classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3254"/>
        <source>DP&apos; Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3259"/>
        <source>DP&apos; Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3264"/>
        <source>DP&apos; Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3273"/>
        <source>DP&apos; DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3284"/>
        <source>GROUP DEGREE PRESTIGE (GDP)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3288"/>
        <source>GDP = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3295"/>
        <source>GDP range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3301"/>
        <source>GDP = 0, when all in-degrees are equal (i.e. regular lattice).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3303"/>
        <source>GDP = 1, when one node is chosen by all other nodes (i.e. star). </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3319"/>
        <source>Degree Prestige report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3397"/>
        <source>Writing Proximity Prestige scores to file. 
Please wait ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3405"/>
        <source>PROXIMITY PRESTIGE (PP)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3421"/>
        <source>The PP index of a node u is the ratio of the proportion of nodes who can reach u to the average distance these nodes are from u (Wasserman &amp; Faust, formula 5.25, p. 204)&lt;br /&gt;Thus, it is similar to Closeness Centrality but it counts only inbound distances to each actor, thus it is a measure of actor prestige. &lt;br /&gt;This metric is useful for directed networks which are not strongly connected (thus the ordinary CC index cannot be computed).&lt;br /&gt;In undirected networks, the PP has the same properties and yields the same results as Closeness Centrality.&lt;br /&gt;Read the Manual for more. &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3435"/>
        <source>PP range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3437"/>
        <source>0 &amp;le; PP &amp;le; 1 (PP is a ratio)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3451"/>
        <source>All nodes have the same PP score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3458"/>
        <source>Max PP = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3463"/>
        <source>Min PP = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3468"/>
        <source>PP classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3476"/>
        <source>PP Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3481"/>
        <source>PP Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3486"/>
        <source>PP Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3495"/>
        <source>PP DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3505"/>
        <source>Proximity Prestige report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3578"/>
        <source>Writing PageRank scores to file. 
Please wait ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3586"/>
        <source>PAGERANK PRESTIGE (PRP)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3602"/>
        <source>The PRP is an importance ranking index for each node based on the structure of its incoming links/edges and the rank of the nodes linking to it. &lt;br /&gt;For each node u the algorithm counts all inbound links (edges) to it, but it normalizes each inbound link from a node v by the outDegree of v. &lt;br /&gt;The PR values correspond to the principal eigenvector of the normalized link matrix.&lt;br /&gt;Note: In weighted relations, each backlink to a node u from another node v is considered to have weight=1 but it is normalized by the sum of outbound edge weights of v. Therefore, nodes with high outLink weights give smaller percentage of their PR to node u.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3614"/>
        <source>PRP&apos; is the scaled PRP (PRP divided by max PRP).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3619"/>
        <source>PRP range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3621"/>
        <source>(1-d)/N = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3621"/>
        <source> &amp;le; PRP  </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3626"/>
        <source>PRP&apos; range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3628"/>
        <source>0 &amp;le; PRP&apos; &amp;le; 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3642"/>
        <source>All nodes have the same PRP score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3649"/>
        <source>Max PRP = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3654"/>
        <source>Min PRP = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3659"/>
        <source>PRP classes = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3667"/>
        <source>PRP Sum = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3672"/>
        <source>PRP Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3677"/>
        <source>PRP Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3686"/>
        <source>PRP&apos; DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3696"/>
        <source>PageRank Prestige report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3744"/>
        <source>Computing Walks...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3767"/>
        <source>WALKS OF LENGTH %1 MATRIX</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3771"/>
        <source>TOTAL WALKS MATRIX</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3791"/>
        <source>The Walks of length %1 matrix is a NxN matrix where each element (i,j) is the number of walks of length %1 between actor i and actor j, or 0 if no walk exists. &lt;br /&gt;A walk is a sequence of edges and vertices, where each edge&apos;s endpoints are the two vertices adjacent to it. In a walk, vertices and edges may repeat. &lt;br /&gt;Warning: Walks count unordered pairs of nodes. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3805"/>
        <source>The Total Walks matrix of a social network is a NxN matrix where each element (i,j) is the total number of walks of any length (less than or equal to %1) between actor i and actor j, or 0 if no walk exists. &lt;br /&gt;A walk is a sequence of edges and vertices, where each edge&apos;s endpoints are the two vertices adjacent to it. In a walk, vertices and edges may repeat. &lt;br /&gt;Warning: Walks count unordered pairs of nodes. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3817"/>
        <source>Writing Walks matrix to file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3831"/>
        <source>Walks report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3888"/>
        <source>Writing Clustering Coefficients to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3896"/>
        <source>CLUSTERING COEFFICIENT (CLC) REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3912"/>
        <source>The local Clustering Coefficient, introduced by Watts and Strogatz (1998) quantifies how close each node and its neighbors are to being a complete subgraph (clique).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3915"/>
        <source>For each node &lt;em&gt;u&lt;/em&gt;, the local CLC score is the proportion of actual links between its neighbors divided by the number of links that could possibly exist between them. &lt;br /&gt;The CLC index is used to characterize the transitivity of a network. A value close to one indicates that the node is involved in many transitive relations. CLC&apos; is the normalized CLC, divided by maximum CLC found in this network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3924"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3931"/>
        <source>CLC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3926"/>
        <source>0 &amp;le; CLC &amp;le; 1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3933"/>
        <source>0 &amp;le; CLC&apos; &amp;le; 1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3944"/>
        <source>All nodes have the same local CLC score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3951"/>
        <source>Max CLC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3956"/>
        <source>Min CLC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3965"/>
        <source>CLC Mean = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3970"/>
        <source>CLC Variance = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3977"/>
        <source>GROUP / NETWORK AVERAGE CLUSTERING COEFFICIENT (GCLC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3982"/>
        <source>GCLC = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3988"/>
        <source>Range: 0 &lt; GCLC &lt; 1 &lt;br/ &gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3989"/>
        <source>GCLC = 0, when there are no cliques (i.e. acyclic tree). &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3990"/>
        <source>GCLC = 1, when every node and its neighborhood are complete cliques.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="3995"/>
        <source>Clustering Coefficient report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4032"/>
        <source>Computing triad census. Please wait....</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4076"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4123"/>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4076"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4125"/>
        <source>Census</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4085"/>
        <source>Writing Triad Census to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4091"/>
        <source>TRIAD CENSUS (TRC) REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4107"/>
        <source>A Triad Census counts all the different types (classes) of observed triads within a network. &lt;br /&gt;The triad types are coded and labeled according to their number of mutual, asymmetric and non-existent (null) dyads. &lt;br /&gt;SocNetV follows the M-A-N labeling scheme, as described by Holland, Leinhardt and Davis in their studies. &lt;br /&gt;In the M-A-N scheme, each triad type has a label with four characters: &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4111"/>
        <source>- The first character is the number of mutual (M) dyads in the triad. Possible values: 0, 1, 2, 3.&lt;br /&gt;- The second character is the number of asymmetric (A) dyads in the triad. Possible values: 0, 1, 2, 3.&lt;br /&gt;- The third character is the number of null (N) dyads in the triad. Possible values: 0, 1, 2, 3.&lt;br /&gt;- The fourth character is inferred from features or the nature of the triad, i.e. presence of cycle or transitivity. Possible values: none, D (&quot;Down&quot;), U (&quot;Up&quot;), C (&quot;Cyclic&quot;), T (&quot;Transitive&quot;)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4150"/>
        <source>Triad Census report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4204"/>
        <source>Computing Clique Census and writing it to a file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4208"/>
        <source>Computing Clique Census. Please wait..</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4222"/>
        <source>Writing Clique Census to file. Please wait..</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4231"/>
        <source>CLIQUE CENSUS (CLQs) REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4247"/>
        <source>A clique is the largest subgroup of actors in the social network who are all directly connected to each other (maximal complete subgraph). &lt;br /&gt;SocNetV applies the Bron–Kerbosch algorithm to produce a census of all maximal cliques in the network and reports some useful statistics such as disaggregation by vertex and co-membership information. &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4256"/>
        <source>Maximal Cliques found: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4265"/>
        <source>Clique No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4267"/>
        <source>Clique members</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4303"/>
        <source>Actor by clique analysis: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4305"/>
        <source>Proportion of clique members adjacent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4312"/>
        <source>&lt;sub&gt;Actor&lt;/sub&gt;/&lt;sup&gt;Clique&lt;/sup&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4373"/>
        <source>Actor by actor analysis: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4375"/>
        <source> Co-membership matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4382"/>
        <source>&lt;sub&gt;Actor&lt;/sub&gt;/&lt;sup&gt;Actor&lt;/sup&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4427"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4463"/>
        <source>Hierarchical clustering of overlap matrix: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4429"/>
        <source>Actors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4432"/>
        <source>Computing HCA for Cliques. Please wait..</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4449"/>
        <source>Writing HCA for Cliques. Please wait..</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4456"/>
        <source>Clique by clique analysis: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4458"/>
        <source>Co-membership matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4465"/>
        <source>Clique</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4470"/>
        <source>Clique Census Report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4539"/>
        <source>Computing hierarchical clustering. Please wait... </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4566"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5900"/>
        <source>Error: unsupported matrix type.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4588"/>
        <source>Writing Hierarchical Cluster Analysis to file. 
Please wait... </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4597"/>
        <source>HIERARCHICAL CLUSTERING (HCA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4614"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5157"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5346"/>
        <source>Input matrix: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4621"/>
        <source>Distance/dissimilarity metric: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4628"/>
        <source>Clustering method/criterion: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4637"/>
        <source>Analysis results</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4643"/>
        <source>Structural Equivalence Matrix: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4657"/>
        <source>Hierarchical Clustering of Equivalence Matrix: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4671"/>
        <source>Hierarchical Cluster Analysis report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4731"/>
        <source>Clustering Dendrogram (SVG)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4947"/>
        <source>Examining pair-wise tie profile dissimilarities of actors...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4957"/>
        <source>Writing tie profile dissimilarities to file: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4972"/>
        <source>DISSIMILARITIES MATRIX</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4989"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5164"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5353"/>
        <source>Variables in: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="4996"/>
        <source>Metric: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5003"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5178"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5360"/>
        <source>Diagonal: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5010"/>
        <source>Range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5014"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5191"/>
        <source>0 &amp;lt; C &amp;lt; 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5016"/>
        <source>0 &amp;lt; C </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5022"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5197"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5375"/>
        <source>Analysis results </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5029"/>
        <source>DSM = 0 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5031"/>
        <source>when two actors have no tie profile dissimilarities. The actors have the same ties to all others.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5034"/>
        <source>DSM &amp;gt; 0 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5036"/>
        <source>when the two actors have differences in their ties to other actors.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5041"/>
        <source>Dissimilarity Matrix Report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5091"/>
        <source>Examining pair-wise similarity of actors...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5124"/>
        <source>Writing Similarity coefficients to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5140"/>
        <source>SIMILARITY MATRIX: MATCHING COEFFICIENTS (SMMC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5171"/>
        <source>Matching measure: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5185"/>
        <source>SMMC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5189"/>
        <source>0 &amp;lt; C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5207"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5220"/>
        <source>SMMC = 0 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5209"/>
        <source>when two actors are absolutely similar (no tie/distance differences).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5212"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5225"/>
        <source>SMMC &amp;gt; 0 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5214"/>
        <source>when two actors have some differences in their ties/distances, i.e. SMMC = 3 means the two actors have 3 differences in their tie/distance profiles to other actors.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5222"/>
        <source>when there is no tie profile similarity at all.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5227"/>
        <source>when two actors have some matches in their ties/distances, i.e. SMMC = 1 means the two actors have their ties to other actors exactly the same all the time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5234"/>
        <source>Similarity Matrix by Matching Measure Report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5278"/>
        <source>Calculating Pearson Correlations...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5314"/>
        <source>Writing Pearson coefficients to file: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5329"/>
        <source>PEARSON CORRELATION COEFFICIENTS (PCC) MATRIX</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5367"/>
        <source>PCC range: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5383"/>
        <source>PCC = 0 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5385"/>
        <source>when there is no correlation at all.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5388"/>
        <source>PCC &amp;gt; 0 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5390"/>
        <source>when there is positive correlation, i.e. +1 means actors with same patterns of ties/distances.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5394"/>
        <source>PCC &amp;lt; 0 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5396"/>
        <source>when there is negative correlation, i.e. -1 for actors with exactly opposite patterns of ties.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5403"/>
        <source>Pearson Correlation Coefficients Report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5458"/>
        <source>Campnet dataset

The dataset is the interactions among 18 people, including 4 instructors, participating in a 3-week workshop. 
Each person was asked to rank everyone else in terms of how much time they spent with them.
This dataset shows only top 3 choices for each respondent(week 2 and week 3). Thus, there is a 1 for xij if person i listed person j as one of their top 3 interactors.

The Camp data were collected by Steve Borgatti, Russ Bernard and Bert Pelto in 1992 at the NSF Summer Institute for Ethnographic Research Methods.
 During the 3-week workshop, all the participants and instructors were housed at the same motel and spent a great deal of time together. 
The participants were all faculty in Anthropology except Holly, who was a PhD student. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5480"/>
        <source>Herschel graph 

The Herschel graph is the smallest nonhamiltonian polyhedral graph. 
It is the unique such graph on 11 nodes, and has 18 edges.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5489"/>
        <source>High-tech Managers

Krackhardt&apos;s High-tech Managers is a famous social network of 21 managers of a high-tech US company. 

The company manufactured high-tech equipment and had just over 100 employees with 21 managers. David Krackhardt collected the data to assess the effects of a recent management intervention program. 

The network consists of 3 relations:
- Advice
- Friendship
- Reports To
Each manager was asked to whom do you go to for advice and who is your friend. Data for the &quot;whom do you report&quot; relation was taken from company documents. 

This data is used by Wasserman and Faust in their seminal network analysis book.

Krackhardt D. (1987). Cognitive social structures. Social Networks, 9, 104-134.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5508"/>
        <source>Padgett&apos;s Florentine_Families

This famous data set includes 16 families who were fighting each other to gain political control of the city of Florence circa 1430. Among the 16 families, the Medicis and the Strozzis were the two most prominent with factions formed around them.

The data set is actually a subset of the original data on social relations among 116 Renaissance Florentine Families collected by John Padgett. This subset was used by Breiger &amp; Pattison (1986) in their paper about local role analysis.

Padgett researched historical documents to code two relations: Business ties (loans, credits, partnerships)
Marrital ties (marriage alliances).

Breiger R. and Pattison P. (1986). Cumulated social roles: The duality of persons and their algebras. Social Networks, 8, 215-256. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5528"/>
        <source>Zachary Karate Club 

The Zachary Karate Club is a well-known social network of 34 members of a university karate club studied by Wayne W. Zachary from 1970 to 1972.

During the study, disputes among two members led to club splitting into two groups. Zachary documented 78 ties between members who interacted outside the club and used the collected data and an information flow model to explain the split-up. 

There are two relations (matrices) in this network:The ZACHE relation represents the presence or absence of ties among the actors. The ZACHC relation indicates the relative strength of their associations (number of situations in and outside the club in which interactions occurred).

Zachary W. (1977). An information flow model for conflict and fission in small groups. Journal of Anthropological Research, 33, 452-473. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5543"/>
        <source>Galaskiewicz&apos;s CEOs and Clubs

The affiliation network of the chief executive officers and their spouses from 26 corporations and banks in 15 clubs, corporate and cultural boards. Membership was during the period 1978-1981

This is a 26x15 affiliation matrix, where the rows correspond to the 26 CEOs and the columns to the 15 clubs. 

This data  was originally collected by Galaskiewicz (1985) and is used by Wasserman and Faust in Social Network Analysis: Methods and Applications (1994).

Galaskiewicz, J. (1985). Social Organization of an Urban Grants Economy. New York: Academic Press. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5556"/>
        <source>Thurman&apos;s Office Networks and Coalitions

In the late 70s, B. Thurman spent 16 months observing the interactions among employees in the overseas office of a large international corporation. 
During this time, two major disputes erupted in a subgroup of fifteen people. 
Thurman analyzed the outcome of these disputes in terms of the network of formal and informal associations among those involved.

This labeled dataset contains two relations (15x15 matrices): 
THURA is a 15x15 non-symmetric, binary matrix showing the formal organizational chart of the employees.

THURM is a 15x15 symmetric binary matrix which shows the actors linked by multiplex ties. 

Thurman B. (1979). In the office: Networks and coalitions. Social Networks, 2, 47-63</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5576"/>
        <source>Corporate Interlocks in Netherlands

A 16x16 symmetric, binary matrix.This data represent corporate interlocks among the major business entities in the Netherlands. The data were gathered during a 6-year research project which was concluded in 1976 in nine European countries and the USA 

Stokman F., Wasseur F. and Elsas D. (1985). The Dutch network: Types of interlocks and network structure. In F. Stokman, R. Ziegler &amp; J. Scott (eds), Networks of corporate power. Cambridge: Polity Press, 1985</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5592"/>
        <source>Corporate Interlocks in West Germany

A 15x15 symmetric, binary matrix.This data represent corporate interlocks among the major business entities in the West Germany. The data were gathered during a 6-year research project which was concluded in 1976 in nine European countries and the USA 

Ziegler R., Bender R. and Biehler H. (1985). Industry and banking in the German corporate network. In F. Stokman, R. Ziegler &amp; J. Scott (eds), Networks of corporate  power. Cambridge: Polity Press, 1985. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5609"/>
        <source>Bernard and Killworth Fraternity

Bernard &amp; Killworth recorded the interactions among students living in a fraternity at a West Virginia college. Subjects had been residents in the fraternity from 3 months to 3 years. This network dataset contains two relations: 

The BKFRAB relation is symmetric and valued. It counts the number of times a pair of subjects were seen in conversation by an unobtrusive observer (observation time: 21 hours a day, for five days). 

The BKFRAC relation is non-symmetric and valued. Contains rankings made by the subjects themselves of how frequently they interacted with other subjects in the observation week. 

Knoke D. and Wood J. (1981). Organized for action: Commitment in voluntary associations. New Brunswick, NJ: Rutgers University Press. Knoke D. and Kuklinski J. (1982). Network analysis, Beverly Hills, CA: Sage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5624"/>
        <source>Freeman&apos;s EIES Networks

This data comes from an early experiment on computer mediated communication. 
Fifty academics were allowed to contact each other via an Electronic Information Exchange System (EIES). The data collected consisted of all messages sent plus acquaintance relationships at two time periods.

The data includes the 32 actors who completed the study and 
the following three 32x32 relations: 

TIME_1 non-symmetric, valued
TIME_2 non-symmetric, valued
NUMBER_OF_MESSAGES non-symmetric, valued

TIME_1 and TIME_2 give the acquaintance information at the beginning and end of the study. This is coded as follows: 
4 = close personal fiend, 
3 = friend, 
2= person I&apos;ve met, 
1 = person I&apos;ve heard of but not met, and 
0 = person unknown to me (or no reply). 

NUMBER_OF MESSAGES is the total number of messages person i 
sent to j over the entire period of the study. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5651"/>
        <source>Freeman&apos;s EIES network (Acquaintanceship) at time 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5656"/>
        <source>Freeman&apos;s EIES network (Acquaintanceship) at time 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5660"/>
        <source>Freeman&apos;s EIES network (Messages)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5665"/>
        <source>Freeman&apos;s 34 possible graphs of N=5

This data comes from Freeman&apos;s (1979) seminal paper &quot;Centrality in social networks&quot;.
It illustrates all 34 possible graphs of five nodes. 
Freeman used them to calculate and compare the three measures of Centrality: Degree, Betweenness and Closeness. 
Use Relation buttons on the toolbar to move between the graphs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5675"/>
        <source>Mexican Power Network in the 1940s

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5679"/>
        <source>Knoke Bureaucracies

In 1978, Knoke &amp; Wood collected data from workers at 95 organizations in Indianapolis. Respondents indicated with which other organizations their own organization had any of 13 different types of relationships. 
Knoke and Kuklinski (1982) selected a subset of 10 organizations and two relationships: information exchange and money exchange.
This dataset is directed and not symmetric.
Information exchange is recorded in KNOKI relation while money exchange in KNOKM .</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5691"/>
        <source>Stephenson &amp; Zelen&apos;s AIDS patients network (sex contact)

The data described by Auerbach et al. (1984) and Klovdahl (1985) consists of information on 40 homosexual men diagnosed with AIDS. Initially, 19 men residing in the Los Angeles and Orange County area were interviewed about their previous sexual contacts. This information led to the subsequent identification of an additional 21 sexual partners in San Francisco, New York and other parts of the United States. All 40 homosexual men were linked to each other through sexual contact.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5704"/>
        <source>Galada baboon colony network (H22a) 

A network of the Galada baboon colony, as described by Dunbar and Dunbar (1975). This is the first set of observations (H22a) and was made on 12 baboons.

The lines connecting two points (baboons) represent nonagonistic interactions (generally grooming behavior) and the frequency of such interactions is recorded by the edge weight. Data derived from Stephenson &amp; Zelen seminal 1989 paper where they introduced Information Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5712"/>
        <source>Wasserman &amp; Faust&apos;s 7 actors graphs

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5716"/>
        <source>Wasserman &amp; Faust&apos;s Countries Trade Data (manufactured goods)

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5722"/>
        <source>This data set is just a famous non-planar mathematical graph, 
named after Julius Petersen, who constructed it in 1898.
The Petersen graph is undirected with 10 vertices and 15 edges 
and the smallest bridgeless cubic graph with no three-edge-coloring.
This small graph serves as a useful example and counterexample 
for many problems in graph theory. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5794"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5869"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5880"/>
        <source>Adjacency recomputed. Writing Adjacency Matrix...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5797"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5808"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5861"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5872"/>
        <source>Need to recompute Adjacency Matrix. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5805"/>
        <source>Adjacency recomputed. Writing Laplacian Matrix...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5816"/>
        <source>Adjacency recomputed. Writing Degree Matrix...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5826"/>
        <source>Distances recomputed. Writing Distances Matrix...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5836"/>
        <source>Distances recomputed. Writing Shortest Paths Matrix...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5839"/>
        <source>Computing Inverse Adjacency Matrix. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5847"/>
        <source>Inverse Adjacency Matrix computed. Writing Matrix...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5857"/>
        <source>Writing Reachability Matrix...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5887"/>
        <source>Need to recompute tie profile distances. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5895"/>
        <source>Tie profile distances recomputed. Writing matrix...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5984"/>
        <source>ADJACENCY MATRIX REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5987"/>
        <source>LAPLACIAN MATRIX REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5990"/>
        <source>DEGREE MATRIX REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5993"/>
        <source>DISTANCES MATRIX REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5996"/>
        <source>SHORTEST PATHS (GEODESICS) MATRIX REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="5999"/>
        <source>INVERSE ADJACENCY MATRIX REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6002"/>
        <source>REACHABILITY MATRIX REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6005"/>
        <source>TRANSPOSE OF ADJACENCY MATRIX REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6008"/>
        <source>COCITATION MATRIX REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6011"/>
        <source>EUCLIDEAN DISTANCE MATRIX REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6014"/>
        <source>HAMMING DISTANCE MATRIX REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6017"/>
        <source>JACCARD DISTANCE MATRIX REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6020"/>
        <source>MANHATTAN DISTANCE MATRIX REPORT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6044"/>
        <source>The adjacency matrix, AM, of a social network is a NxN matrix </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6045"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6595"/>
        <source>where each element (i,j) is the value of the edge from actor i to actor j, or 0 if no edge exists.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6053"/>
        <source>The laplacian matrix L of a social network is a NxN matrix </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6054"/>
        <source>with L = D - A, where D the degree matrix and A the adjacency matrix. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6057"/>
        <source>The elements of L are: &lt;br /&gt;- L&lt;sub&gt;i,j&lt;/sub&gt; = d&lt;sub&gt;i&lt;/sub&gt;, if i = j, &lt;br /&gt;- L&lt;sub&gt;i,j&lt;/sub&gt; = -1,  if i &amp;ne; j and there is an edge (i,j)&lt;br /&gt;- and all other elements zero.&lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6068"/>
        <source>The degree matrix D of a social network is a NxN matrix </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6069"/>
        <source>where each element (i,i) is the degree of actor i and all other elements are zero.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6077"/>
        <source>The distance matrix of a social network is a NxN matrix where each element (i,j) is the geodesic distance (length of shortest path) from actor i to actor j, or infinity if no shortest path exists.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6087"/>
        <source>The geodesics matrix of a social network is a NxN matrix </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6088"/>
        <source>where each element (i,j) is the number of shortest paths(geodesics) from actor i to actor j, or infinity if no shortest path exists.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6100"/>
        <source>The adjacency matrix is singular.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6111"/>
        <source>The reachability matrix R of a social network is a NxN matrix where each element R(i,j) is 1 if actors j is reachable from i otherwise 0. &lt;br /&gt;Two nodes are reachable if there is a walk between them (their geodesic distance is non-zero). &lt;br /&gt;Essentially the reachability matrix is a dichotomized geodesics matrix.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6125"/>
        <source>The adjacency matrix AM of a social network is a NxN matrix where each element (i,j) is the value of the edge from actor i to actor j, or 0 if no edge exists. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6129"/>
        <source>This is the transpose of the adjacency matrix, AM&lt;sup&gt;T&lt;/sup&gt;, a matrix whose (i,j) element is the (j,i) element of AM.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6138"/>
        <source>The Cocitation matrix, C = A&lt;sup&gt;T&lt;/sup&gt; * A, is a NxN matrix where each element (i,j) is the number of actors that have outbound ties/links to both actors i and j.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6142"/>
        <source>The diagonal elements, C&lt;sub&gt;ii&lt;/sub&gt;, of the Cocitation matrix are equal to the number of inbound edges of i (inDegree).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6145"/>
        <source>C is a symmetric matrix.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6152"/>
        <source>The Euclidean distances matrix is a NxN matrix where each element (i,j) is the Euclidean distanceof the tie profiles between actors i and j, namely the square root of the sum of their squared differences.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6164"/>
        <source>The Hamming distances matrix is a NxN matrix where each element (i,j) is the Hamming distanceof the tie profiles between actors i and j, namely the number of different ties to other actors.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6176"/>
        <source>The Jaccard distances matrix is a NxN matrix where each element (i,j) is the Jaccard distanceof the tie profiles between actors i and j.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6188"/>
        <source>The Manhattan distances matrix is a NxN matrix where each element (i,j) is the Manhattan distanceof the tie profiles between actors i and j, namely  the sum of their absolute differences.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6200"/>
        <source>The Chebyshev distances matrix is a NxN matrix where each element (i,j) is the Chebyshev distanceof the tie profiles between actors i and j, namely the greatest of their differences.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6216"/>
        <source>Matrix report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6261"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6408"/>
        <source>Writing matrix to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6275"/>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6604"/>
        <source>&lt;sub&gt;Actor&lt;/sup&gt;/&lt;sup&gt;Actor&lt;/sup&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6534"/>
        <source>Writing Adjacency Matrix to file. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6578"/>
        <source>ADJACENCY MATRIX</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6594"/>
        <source>The adjacency matrix of a social network is a NxN matrix </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6663"/>
        <source>Adjacency matrix report, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6708"/>
        <source>Plotting Adjacency Matrix. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6719"/>
        <source>ADJACENCY MATRIX PLOT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6735"/>
        <source>This a plot of the network&apos;s adjacency matrix, a NxN matrix </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6736"/>
        <source>where each element (i,j) is filled if there is an edge from actor i to actor j, or not filled if no edge exists.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/reporting/graph_reports.cpp" line="6826"/>
        <source>Adjacency matrix plot, &lt;br /&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="137"/>
        <source>New node (numbered %1) added at position (%2,%3). Double-click on it to start a new edge from it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="431"/>
        <source>-clique</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="443"/>
        <source>Creating subgraph. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="815"/>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="863"/>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="1194"/>
        <source>Found %1 matching nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="821"/>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="869"/>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="1200"/>
        <source>Could not find any nodes matching your choices.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="957"/>
        <source>Please compute Katz Centrality first (Analyze &gt; Centrality &gt; Katz Centrality), then try again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="968"/>
        <source>Please compute Bonacich Power Centrality first (Analyze &gt; Centrality &gt; Bonacich Power Centrality), then try again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="984"/>
        <source>Signed Degree Centrality has no single score to search by yet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/graph/storage/graph_vertices.cpp" line="992"/>
        <source>PN Centrality has no single score to search by yet.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GraphTableWidget</name>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="93"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="175"/>
        <source>Search...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="97"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="179"/>
        <source>Refresh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="98"/>
        <source>Reload node data from the current graph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="100"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="182"/>
        <source>Export CSV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="101"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="183"/>
        <source>Export currently visible rows as CSV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="103"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="185"/>
        <source>Export JSON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="104"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="186"/>
        <source>Export currently visible rows as JSON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="106"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="188"/>
        <source>Import CSV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="107"/>
        <source>Import node attributes from a CSV file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="109"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="191"/>
        <source>Import JSON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="110"/>
        <source>Import node attributes from a JSON file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="112"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="194"/>
        <source>Set property...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="114"/>
        <source>Set a single property on the selected rows (or all visible rows if none are selected). Applies to built-in fields (Label, Size, Color, Shape) and custom attributes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="117"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="199"/>
        <source>Remove attribute...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="119"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="201"/>
        <source>Remove a custom attribute key from the selected rows (or all visible rows if none are selected).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="121"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="203"/>
        <source>Add attribute...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="123"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="205"/>
        <source>Add a new custom attribute key/value to the selected rows (or all visible rows if none are selected).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="180"/>
        <source>Reload edge data from the current graph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="189"/>
        <source>Import edge attributes from a CSV file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="192"/>
        <source>Import edge attributes from a JSON file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="196"/>
        <source>Set a single property on the selected rows (or all visible rows if none are selected). Applies to built-in fields (Label, Weight, Color) and custom attributes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="254"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="255"/>
        <source>Edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="371"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="376"/>
        <source>nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="381"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="386"/>
        <source>edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="399"/>
        <source>csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="399"/>
        <source>json</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="400"/>
        <source>CSV files (*.csv)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="400"/>
        <source>JSON files (*.json)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="404"/>
        <source>Export %1 as %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="415"/>
        <source>Exported %1 to %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="418"/>
        <source>Export failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="419"/>
        <source>Could not write to %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="611"/>
        <source>Set &apos;%1&apos; on %2 node(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="631"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="639"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="737"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="745"/>
        <source>Remove Attribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="632"/>
        <source>No custom attributes found on the selected nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="640"/>
        <source>Select attribute key to remove from %1 node(s):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="650"/>
        <source>Removed attribute &apos;%1&apos; from %2 node(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="662"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="670"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="770"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="778"/>
        <source>Add Attribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="663"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="771"/>
        <source>Attribute name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="671"/>
        <location filename="../src/widgets/graphtablewidget.cpp" line="779"/>
        <source>Value for &apos;%1&apos;:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="681"/>
        <source>Added attribute &apos;%1&apos; to %2 node(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="718"/>
        <source>Set &apos;%1&apos; on %2 edge(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="738"/>
        <source>No custom attributes found on the selected edges.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="746"/>
        <source>Select attribute key to remove from %1 edge(s):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="759"/>
        <source>Removed attribute &apos;%1&apos; from %2 edge(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="789"/>
        <source>Added attribute &apos;%1&apos; to %2 edge(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="824"/>
        <source>node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="824"/>
        <source>edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/graphtablewidget.cpp" line="826"/>
        <source>Imported attributes into %1 %2(s) from %3 rows</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="61"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="606"/>
        <source>Computing Degree Centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="67"/>
        <source>Opening Out-Degree Centralities report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="78"/>
        <source>Out-Degree Centralities report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="110"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="639"/>
        <source>Computing Signed Degree Centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="116"/>
        <source>Opening Signed Degree Centralities report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="127"/>
        <source>Signed Degree Centralities report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="167"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="678"/>
        <source>Computing PN Centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="173"/>
        <source>Opening PN Centralities report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="184"/>
        <source>PN Centralities report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="221"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="710"/>
        <source>Computing Closeness Centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="225"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="956"/>
        <source>Opening Closeness Centralities report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="236"/>
        <source>Closeness Centralities report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="272"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="742"/>
        <source>Computing Influence Range Closeness Centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="278"/>
        <source>Opening Influence Range Closeness Centralities report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="289"/>
        <source>Influence Range Closeness Centralities report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="321"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="774"/>
        <source>Computing Betweenness Centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="325"/>
        <source>Opening Betweenness Centralities report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="336"/>
        <source>Betweenness Centralities report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="355"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="356"/>
        <source>Warning! Running Degree Prestige index on an undirected network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="357"/>
        <source>This network is not directed (undirected graph). The Degree Prestige index counts inbound edges, therefore it is meaningful on directed networks. For undirected networks, such as this one, Degree Prestige is the same as Degree Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="378"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="965"/>
        <source>Computing Degree Prestige. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="384"/>
        <source>Opening Degree Prestige (in-degree) report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="395"/>
        <source>Degree Prestige (in-degree) report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="426"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="1023"/>
        <source>Computing PageRank Prestige. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="432"/>
        <source>Opening PageRank Prestige report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="443"/>
        <source>PageRank Prestige report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="475"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="995"/>
        <source>Computing Proximity Prestige. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="481"/>
        <source>Opening Proximity Prestige report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="492"/>
        <source>Proximity Prestige report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="526"/>
        <source>Please note that this function can be &lt;b&gt;SLOW&lt;/b&gt; on very large networks (n&gt;2000), and cannot currently be canceled once started. &lt;br&gt;&lt;br&gt;It computes the (n x n) matrix A with: &lt;br&gt;Aii=1+weighted_degree_ni &lt;br&gt;Aij=1 if (i,j)=0 &lt;br&gt;Aij=1-wij if (i,j)=wij &lt;br&gt;then computes the inverse matrix C of A via LU decomposition -- an O(n&amp;sup3;) operation. &lt;br&gt;&lt;br&gt;How slow is this? On a modern machine, a 2,000-node network takes about 15 seconds; since the cost grows roughly cubically with network size, much larger networks (tens of thousands of nodes) can take several minutes or more. &lt;br&gt;Are you sure you want to continue?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="569"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="902"/>
        <source>Computing Information Centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="573"/>
        <source>Opening Information Centralities report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="584"/>
        <source>Information Centralities report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="618"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="935"/>
        <source>Computing Eigenvector Centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="622"/>
        <source>Opening Eigenvector Centralities report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="633"/>
        <source>Eigenvector Centralities report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="668"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="806"/>
        <source>Computing Stress Centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="672"/>
        <source>Opening Stress Centralities report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="683"/>
        <source>Stress Centralities report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="718"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="870"/>
        <source>Computing Power Centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="722"/>
        <source>Opening Gil-Schmidt Power Centralities report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="733"/>
        <source>Gil-Schmidt Power Centralities report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="774"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="864"/>
        <source>Estimating the network&apos;s largest eigenvalue...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="789"/>
        <source>Alpha too large</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="790"/>
        <source>Alpha must be smaller than %1 (1 / this network&apos;s largest eigenvalue), or Katz Centrality does not converge. Please choose a smaller value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="808"/>
        <source>Computing Katz Centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="812"/>
        <source>Opening Katz Centralities report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="823"/>
        <source>Katz Centralities report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="879"/>
        <source>Beta too large</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="880"/>
        <source>Beta must be smaller in absolute value than %1 (1 / this network&apos;s largest eigenvalue), or Bonacich Power Centrality does not converge. Please choose a smaller value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="898"/>
        <source>Computing Bonacich Power Centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="902"/>
        <source>Opening Bonacich Power Centralities report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="913"/>
        <source>Bonacich Power Centralities report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="952"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="838"/>
        <source>Computing Eccentricity Centralities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_centrality.cpp" line="967"/>
        <source>Eccentricity Centralities report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_clustering.cpp" line="55"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="1051"/>
        <source>Computing Reciprocity. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_clustering.cpp" line="59"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="600"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="669"/>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="218"/>
        <source>Computation canceled, or could not write to file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_clustering.cpp" line="72"/>
        <source>Reciprocity report saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_clustering.cpp" line="102"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="1111"/>
        <source>Computing Clustering Coefficients. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_clustering.cpp" line="118"/>
        <source>Clustering Coefficients saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_clustering.cpp" line="148"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="1138"/>
        <source>Computing Triad Census. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_clustering.cpp" line="164"/>
        <source>Triad Census saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="134"/>
        <source>This empty network is considered connected!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="135"/>
        <source>Empty network is considered connected!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="136"/>
        <source>A null network (empty graph) is considered connected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="143"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="144"/>
        <source>This 1-actor network is considered connected!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="145"/>
        <source>A 1-actor network (singleton graph) is always considered connected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="158"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="314"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="410"/>
        <source>Weak (ignores edge direction)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="159"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="315"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="411"/>
        <source>Strong (respects edge direction)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="163"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2046"/>
        <source>Connectedness</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="164"/>
        <source>This is a directed network. Which kind of connectivity do you want to check?

Weak: treats every edge as bidirectional. Answers &quot;how many disconnected islands are there?&quot;

Strong: respects edge direction. Every node must be able to reach, and be reached from, every other node.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="173"/>
        <source>Connectedness check cancelled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="196"/>
        <source>This directed network is strongly connected (1 component).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="197"/>
        <source>This directed network is strongly connected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="198"/>
        <source>Every node can reach, and be reached from, every other node via directed paths.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="205"/>
        <source>This directed network is weakly connected (1 component).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="206"/>
        <source>This directed network is weakly connected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="207"/>
        <source>All nodes belong to a single weakly connected component. Weak connectivity ignores edge direction - run Connectedness again and choose Strong to check directed reachability.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="216"/>
        <source>This undirected network is connected (1 component).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="217"/>
        <source>This undirected network is connected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="218"/>
        <source>All nodes belong to a single connected component. There is a path between every pair of nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="230"/>
        <source>This directed network is not strongly connected (%1 components).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="231"/>
        <source>This directed network is not strongly connected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="232"/>
        <source>There are %1 strongly connected components. Some node pairs cannot reach each other via directed paths.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="240"/>
        <source>This directed network is disconnected (%1 components).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="241"/>
        <source>This directed network is disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="242"/>
        <source>There are %1 disconnected components. Some node pairs are unreachable from each other, even ignoring edge direction. Use Layout &gt; Node Color by Connected Component to visualize the components.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="254"/>
        <source>This undirected network is disconnected (%1 components).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="255"/>
        <source>This undirected network is disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="256"/>
        <source>There are %1 disconnected components. Some node pairs have no path between them. Use Layout &gt; Node Color by Connected Component to visualize the components.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="284"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="298"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="319"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2064"/>
        <source>Node Connectivity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="285"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="52"/>
        <source>Select source node (%1..%2):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="292"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="305"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="328"/>
        <source>Node connectivity calculation cancelled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="299"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="66"/>
        <source>Select target node (%1..%2):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="320"/>
        <source>This is a directed network. Which kind of connectivity do you want to check?

Weak: treats every edge as bidirectional.

Strong: respects edge direction - counts nodes needed to block directed paths from the source to the target.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="343"/>
        <source>Computing node connectivity. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="350"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="351"/>
        <source>Nodes %1 and %2 are directly connected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="352"/>
        <source>Node connectivity is not defined for directly connected nodes: the edge between them means no removal of other nodes can ever separate them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="361"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="362"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="373"/>
        <source>Node Connectivity: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="363"/>
        <source>At least %1 other node(s) must be removed to disconnect %2 from %3.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="374"/>
        <source>Nodes %1 and %2 are already disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="375"/>
        <source>%1 cannot reach %2 at all, so no node removal is needed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="384"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="385"/>
        <source>Invalid node connectivity request.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="386"/>
        <source>Source and target must be two distinct, existing nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="415"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2077"/>
        <source>Graph Connectivity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="416"/>
        <source>This is a directed network. Which kind of connectivity do you want to check?

Weak: treats every edge as bidirectional.

Strong: respects edge direction.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="423"/>
        <source>Graph connectivity calculation cancelled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="437"/>
        <source>Computing graph connectivity. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="444"/>
        <source>Graph Connectivity: canceled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="445"/>
        <source>Graph connectivity calculation canceled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="446"/>
        <source>Canceled before finishing. The lowest value found among the pairs already tested was %1 - the true answer can only be lower or equal, not higher.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="455"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="456"/>
        <source>Graph Connectivity: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="457"/>
        <source>At least %1 node(s) must be removed to disconnect some pair of nodes in this network - its worst-case robustness to node removal.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="466"/>
        <source>Graph Connectivity: 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="467"/>
        <source>This network is already disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="468"/>
        <source>Some pair of nodes is already unreachable, so no node removal is needed to disconnect the network further.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="502"/>
        <source>Computing Clique Census. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_cohesion.cpp" line="518"/>
        <source>Clique Census saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="51"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="65"/>
        <source>Distance between two nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="72"/>
        <source>Distance calculation operation cancelled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="111"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="112"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="176"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="177"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="195"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="196"/>
        <source>Geodesic Distance: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="113"/>
        <source>Nodes %1 and %2 are connected. The shortest path has length %3.

Shortest path:
%4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="118"/>
        <source>(path unavailable)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="130"/>
        <source>Computing geodesic distance. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="134"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="234"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="361"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="382"/>
        <source>Computation refused: the network contains negative edge weight(s), which this measure does not support.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="139"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="239"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="366"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="387"/>
        <source>Negative edge weights found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="140"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="240"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="367"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="388"/>
        <source>Use the negative-weight-safe algorithm instead?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="141"/>
        <source>The default algorithm (Dijkstra) cannot handle negative edge weights. A slower alternative (Bellman-Ford/Johnson&apos;s algorithm) can, as long as the network has no reachable negative cycle - in which case the distance is undefined and this will refuse as well.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="158"/>
        <source>Computing geodesic distance (negative-weight-safe). Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="162"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="413"/>
        <source>Computation refused: the network contains a reachable negative cycle, so shortest paths are undefined.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="178"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="197"/>
        <source>Nodes %1 and %2 are not connected. In this case, their geodesic distance is considered to be infinite.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="230"/>
        <source>Computing graph diameter. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="241"/>
        <source>The default algorithm (Dijkstra) cannot handle negative edge weights. A slower alternative (Bellman-Ford/Johnson&apos;s algorithm) can, as long as the network has no reachable negative cycle - in which case the diameter is undefined and this will refuse as well.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="257"/>
        <source>Computing graph diameter (negative-weight-safe). Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="261"/>
        <source>Computation refused: the network contains a reachable negative cycle, so shortest paths (and diameter) are undefined.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="269"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="289"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="302"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="315"/>
        <source>Network diameter computed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="270"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="290"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="303"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="316"/>
        <source>Network diameter computed. 

D = %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="273"/>
        <source>The diameter of a network is the maximum geodesic distance (maximum shortest path length) between any two nodes.

Note, this network has negative edge weights, so the negative-weight-safe algorithm was used instead of the default one.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="293"/>
        <source>The diameter of a network is the maximum geodesic distance (maximum shortest path length) between any two nodes.

Note, since this is a weighted network, the diameter can be greater than N.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="306"/>
        <source>The diameter of a network is the maximum geodesic distance (maximum shortest path length) between any two nodes.

Note, edge weights were disregarded during the computation. This is the diameter of the corresponding network without weights.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="319"/>
        <source>The diameter of a network is the maximum geodesic distance (maximum shortest path length) between any two nodes.

Note, since this is a non-weighted network, the diameter is always smaller than N-1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="357"/>
        <source>Computing Average Graph Distance. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="368"/>
        <source>The default algorithm (Dijkstra) cannot handle negative edge weights. A slower alternative (Bellman-Ford/Johnson&apos;s algorithm) can, as long as the network has no reachable negative cycle - in which case the average distance is undefined and this will refuse as well.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="388"/>
        <source>Computing Average Graph Distance (negative-weight-safe). Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="392"/>
        <source>Computation refused: the network contains a reachable negative cycle, so shortest paths (and average distance) are undefined.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="400"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="435"/>
        <source>Average graph distance computed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="401"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="436"/>
        <source>Average graph distance computed. 

d = %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="404"/>
        <source>The average graph distance is the average length of shortest paths (geodesics) for all possible pairs of nodes.

The average distance in this connected network is the sum of pair-wise distances divided by N * (N - 1).

Note, this network has negative edge weights, so the negative-weight-safe algorithm was used instead of the default one.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="416"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="448"/>
        <source>Average distance computed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="417"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="449"/>
        <source>Average distance computed. 

d = %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="420"/>
        <source>The average graph distance is the average length of shortest paths (geodesics) for all possible pairs of nodes.

The average distance in this disconnected network is the sum of pair-wise distances divided by the number of existing geodesics.

Note, this network has negative edge weights, so the negative-weight-safe algorithm was used instead of the default one.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="439"/>
        <source>The average graph distance is the average length of shortest paths (geodesics) for all possible pairs of nodes.

The average distance in this connected network is the sum of pair-wise distances divided by N * (N - 1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="452"/>
        <source>The average graph distance is the average length of shortest paths (geodesics) for all possible pairs of nodes.

The average distance in this disconnected network is the sum of pair-wise distances divided by the number of existing geodesics.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="493"/>
        <source>Computing geodesic distance distribution. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="497"/>
        <source>Error: could not write geodesic distribution report.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="510"/>
        <source>Geodesic distance distribution saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="543"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="1082"/>
        <source>Computing Eccentricity. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="557"/>
        <source>Eccentricities saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="578"/>
        <source>Select desired length of walk: (2 to %1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="596"/>
        <source>Computing walks of length %1. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="613"/>
        <source>Walks of length %1 matrix saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="634"/>
        <source>Please note that this function is VERY SLOW on large networks (n&gt;50), since it will calculate all powers of the sociomatrix up to n-1 in order to find out all possible walks. 

If you need to make a simple reachability test, we advise to use the Reachability Matrix function instead. 

Are you sure you want to continue?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_distance.cpp" line="665"/>
        <source>Computing total walks matrix. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="80"/>
        <source>Symmetric network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="81"/>
        <source>The adjacency matrix is symmetric.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="87"/>
        <source>Non symmetric network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="88"/>
        <source>The adjacency matrix is not symmetric.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="91"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="727"/>
        <location filename="../src/mainwindow/init/mainwindow_init_app.cpp" line="689"/>
        <source>Ready</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="118"/>
        <source>Inverting adjacency matrix. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="122"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="167"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="212"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="257"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="304"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="378"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="420"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="466"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="512"/>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="290"/>
        <source>Computation canceled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="135"/>
        <source>Inverse matrix saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="163"/>
        <source>Transposing adjacency matrix. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="180"/>
        <source>Transpose adjacency matrix saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="208"/>
        <source>Computing Cocitation matrix. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="225"/>
        <source>Cocitation matrix saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="253"/>
        <source>Computing Degree matrix. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="270"/>
        <source>Degree matrix saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="300"/>
        <source>Computing Laplacian matrix. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="317"/>
        <source>Laplacian matrix saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="359"/>
        <source>Geodesic Distances matrix saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="369"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="498"/>
        <source>Computing geodesic distances. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="389"/>
        <source>The default algorithm (Dijkstra) cannot handle negative edge weights. A slower alternative (Bellman-Ford/Johnson&apos;s algorithm) can, as long as the network has no reachable negative cycle - in which case shortest paths are undefined and this will refuse as well.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="409"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="569"/>
        <source>Computing geodesic distances (negative-weight-safe). Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="462"/>
        <source>Computing geodesics (number of shortest paths) for each pair. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="479"/>
        <source>Geodesics Matrix saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="508"/>
        <source>Computing reachability matrix. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_matrices.cpp" line="525"/>
        <source>Reachability matrix saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_prominence.cpp" line="158"/>
        <source>Distribution of %1 values:
Min value: %2 
Max value: %3 
Please note that, due to the small size of this widget, 
if you display a distribution in Bar Chart where there are 
more than 10 values, the widget will not show all bars. 
In this case, use Line or Area Chart (from Settings). 
In any case, the large chart in the HTML report 
is better than this widget...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_shared.cpp" line="44"/>
        <source>Non-Weighted Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_shared.cpp" line="45"/>
        <source>You do not work on a weighted network at the moment. 
Therefore, I will not consider edge weights during computations. 
This option applies only when you load or create a weighted network </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_shared.cpp" line="73"/>
        <source>Weighted Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_shared.cpp" line="74"/>
        <source>This is a weighted network. Consider edge weights?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_shared.cpp" line="75"/>
        <source>The ties in this network have weights (non-unit values) assigned to them. Do you want me to take these edge weights into account (i.e. when computing distances) ?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_shared.cpp" line="98"/>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_shared.cpp" line="99"/>
        <source>Inverse edge weights during calculations? </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_shared.cpp" line="100"/>
        <source>If the edge weights denote cost or real distances (i.e. miles between cities), press No, since the distance between two nodes should be the quickest or cheaper one. 

If the weights denote value or strength (i.e. votes or interaction): for distance-based measures (Closeness, Betweenness, Stress, Eccentricity, IR Closeness, Power Centrality), press Yes, so a strong tie acts like a short path. For measures based on counting walks instead of shortest paths (Eigenvector, Katz, Bonacich, PageRank Prestige), press No instead, so a strong tie keeps contributing more rather than less. See the manual&apos;s Edge Weights section for the full explanation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_similarity.cpp" line="132"/>
        <source>Computing Similarity Matrix. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_similarity.cpp" line="146"/>
        <source>Similarity matrix saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_similarity.cpp" line="220"/>
        <source>Computing Tie Profile Dissimilarities. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_similarity.cpp" line="236"/>
        <source>Tie profile dissimilarities matrix saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_similarity.cpp" line="288"/>
        <source>Computing Pearson Correlation Coefficients. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_similarity.cpp" line="302"/>
        <source>Pearson correlation coefficients matrix saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_similarity.cpp" line="373"/>
        <source>Computing Hierarchical Cluster Analysis. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/analyze/mainwindow_analyze_similarity.cpp" line="389"/>
        <source>Hierarchical Cluster Analysis saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/dispatch/mainwindow_dispatch.cpp" line="201"/>
        <source>Large network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/dispatch/mainwindow_dispatch.cpp" line="202"/>
        <source>This %1 would create approximately %2 edges, which exceeds the safety limit of %3.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/dispatch/mainwindow_dispatch.cpp" line="207"/>
        <source>Generating a network this large has been observed to exhaust available memory and crash the application. Proceed anyway?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/dispatch/mainwindow_dispatch.cpp" line="242"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/dispatch/mainwindow_dispatch.cpp" line="263"/>
        <source>Canceling - please wait for the operation to stop...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="70"/>
        <source>No edges selected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="103"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="470"/>
        <source>Applying bulk edit...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="105"/>
        <source>Set &apos;%1&apos; on %2 edge(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="149"/>
        <source>Undirected edge %1 &lt;--&gt; %2 of weight %3 has been selected. Click anywhere else to unselect it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="155"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="175"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="194"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="910"/>
        <source>Weight:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="166"/>
        <source>Reciprocated edge %1 &lt;--&gt; %2 has been selected. Weight %1 --&gt; %2 = %3, Weight %2 --&gt; %1 = %4. Click anywhere else to unselect it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="188"/>
        <source>Directed edge %1 --&gt; %2 of weight %3 has been selected. Click again to unselect it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="286"/>
        <source>This will draw a new edge between two nodes. 
Enter source node (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="305"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="306"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="322"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="323"/>
        <source>Error. That node does not exist!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="307"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="324"/>
        <source>Are you sure you entered the correct node number?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="312"/>
        <source>Source node:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="312"/>
        <source> 
Now enter a target node [</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="330"/>
        <source>Source and target nodes accepted. 
Please, enter the weight of new edge: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="343"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="344"/>
        <source>Error. That edge already exists!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="345"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="542"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="675"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="805"/>
        <source>Are you sure you entered the correct node numbers?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="374"/>
        <source>New edge %1 -&gt; %2 created, weight %3.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="395"/>
        <source>Select an edge first to edit its properties.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="423"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="589"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="908"/>
        <source>Select edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="424"/>
        <source>This is a reciprocated edge. Select direction to edit properties for:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="430"/>
        <source>Edge properties operation cancelled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="473"/>
        <source>Updated properties of edge %1 → %2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="508"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="520"/>
        <source>Remove edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="509"/>
        <source>Source node:  (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="521"/>
        <source>Target node:  (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="540"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="541"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="673"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="674"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="803"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="804"/>
        <source>Error. Cannot find that edge!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="590"/>
        <source>This is a reciprocated edge. Select direction to remove:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="647"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="777"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="865"/>
        <source>Select edge source node:  (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="659"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="789"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="878"/>
        <source>Select edge target node:  (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="686"/>
        <source>Change edge label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="687"/>
        <source>Enter label: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="695"/>
        <source>Changed edge label. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="699"/>
        <source>Change edge label aborted. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="745"/>
        <source>Changed edges color. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="750"/>
        <source>edges color change aborted. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="821"/>
        <source>Select new color....</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="830"/>
        <source>Edge color changed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="834"/>
        <source>Change edge color aborted. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="909"/>
        <source>This is a reciprocated edge. Select direction:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="960"/>
        <source>New edge weight: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="970"/>
        <source>Change edge weight cancelled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="993"/>
        <source>All ties have been symmetrized.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="994"/>
        <source>All ties between nodes have been symmetrized.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="995"/>
        <source>The network is now symmetric. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1013"/>
        <source>Computing cocitation relation...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1016"/>
        <source>New cocitation relation added. Ready</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1017"/>
        <source>New cocitation relation has been added to the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1018"/>
        <source>In the new relation, there are ties only between pairs of nodes who were cocited by others.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1059"/>
        <source>New binary relation added.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1060"/>
        <source>New dichotomized relation created</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1061"/>
        <source>A new relation called &quot;%1&quot; has been added to the network, using the given dichotomization threshold. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1065"/>
        <source>Edge dichotomization finished. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1087"/>
        <source>Select</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1088"/>
        <source>Symmetrize social network by examining strong ties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1089"/>
        <source>This network has multiple relations. Symmetrize by examining reciprocated ties across all relations or just the current relation?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1092"/>
        <source>all relations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1092"/>
        <source>current relation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1111"/>
        <source>Symmetrizing strong ties...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1113"/>
        <source>New symmetric relation created from strong ties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1114"/>
        <source>New relation created from strong ties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1115"/>
        <source>A new relation &quot;%1&quot; has been added to the network. by counting reciprocated ties only. This relation is binary and symmetric. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1135"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1179"/>
        <source>Undirected data mode. All existing directed edges transformed to undirected. Ready</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1141"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1185"/>
        <source>Undirected data mode. Any edge you add will be undirected. Ready</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1152"/>
        <source>Directed data mode. All existing undirected edges transformed to directed. Ready</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1158"/>
        <source>Directed data mode. Any new edge you add will be directed. Ready</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1199"/>
        <source>Directed data mode. All existing undirected edges transformed to directed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_edge.cpp" line="1205"/>
        <source>Directed data mode. Any new edge you add will be directed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="122"/>
        <source>Filtering by centrality...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="125"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="126"/>
        <source>Nodes: centrality filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="149"/>
        <source>No nodes selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="150"/>
        <source>Please select at least one node first.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="155"/>
        <source>Filtering by selection...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="158"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="159"/>
        <source>Nodes: selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="177"/>
        <source>No node selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="178"/>
        <source>Please click on a node first.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="183"/>
        <source>Filtering ego network...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="186"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="187"/>
        <source>Nodes: ego network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="211"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="284"/>
        <source>No custom attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="212"/>
        <source>This network has no custom node or edge attributes. Add attributes via the Data Table (Ctrl+D) using &quot;Add attribute…&quot;, or via the Node / Edge Properties dialogs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="234"/>
        <source>Filtering by attribute...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="285"/>
        <source>This network has no custom node or edge attributes. Add attributes via the Data Table (Ctrl+D).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="309"/>
        <source>Applying query filter...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="312"/>
        <source>Edges: query (%1 condition(s))</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="317"/>
        <source>Nodes: query (%1 condition(s))</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="347"/>
        <source>Restoring filtered nodes...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="381"/>
        <source>Toggling isolated nodes...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="385"/>
        <source>Isolated nodes disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="389"/>
        <source>Isolated nodes enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="419"/>
        <source>Filtering edges by weight...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="422"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="423"/>
        <source>Edges: weight filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="450"/>
        <source>Resetting edge filters...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="477"/>
        <source>Filtering unilateral edges...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="481"/>
        <source>Unilateral (weak) edges disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_filters.cpp" line="485"/>
        <source>Unilateral (weak) edges enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="71"/>
        <source>Selected nodes: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="82"/>
        <source>Selection cleared</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="111"/>
        <source>New random positioned node (numbered %1) added.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="138"/>
        <source>Node find dialog opened. Enter your choices. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="186"/>
        <source>Finding nodes by index score. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="209"/>
        <source>Error. Cannot remove node!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="210"/>
        <source>Error. Cannot remove this node!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="211"/>
        <source>This a network with more than 1 relations. If you remove a node from the active relation, and then ask me to go to the previous or the next relation, then I would crash because I would try to display edges from a deleted node.You cannot remove nodes in multirelational networks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="229"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="227"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="534"/>
        <source>Remove Node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="230"/>
        <source>Removed %1 nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="250"/>
        <source>Remove node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="251"/>
        <source>Choose a node to remove between (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="263"/>
        <source>Node removed completely.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="285"/>
        <source>Select a node first to edit its properties.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="359"/>
        <source>Updated the properties of node %1. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="391"/>
        <source>Updated the properties of %1 nodes. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="428"/>
        <source>No nodes selected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="472"/>
        <source>Set &apos;%1&apos; on %2 node(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="497"/>
        <source>Error. Not enough nodes selected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="498"/>
        <source>Cannot create new clique because you have not selected enough nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="500"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="541"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="600"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="640"/>
        <source>Select at least three nodes first.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="508"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="567"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="608"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="648"/>
        <source>Creating subgraph. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="515"/>
        <source>Clique created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="516"/>
        <source>A new clique has been created from </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="516"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="119"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="215"/>
        <source> nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="538"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="597"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="637"/>
        <source>Not enough nodes selected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="539"/>
        <source>Cannot create new star subgraph because you have not selected enough nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="553"/>
        <source>To create a star subgraph from selected nodes, 
enter the number of the central actor (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="574"/>
        <source>Star subgraph created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="575"/>
        <source>A new star subgraph has been created with </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="576"/>
        <source> nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="598"/>
        <source>Cannot create new cycle subgraph because you have not selected enough nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="615"/>
        <source>Cycle subgraph created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="616"/>
        <source>A new cycle subgraph has been created with </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="616"/>
        <source> select nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="638"/>
        <source>Cannot create new line subgraph because you have not selected enough nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="655"/>
        <source>Line subgraph created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="656"/>
        <source>A new line subgraph has been created with </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="656"/>
        <source> selected nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="684"/>
        <source>Change all nodes&apos; color. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="689"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="873"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="973"/>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="876"/>
        <source>Invalid color. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="713"/>
        <source>Select new size for all nodes:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="767"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="778"/>
        <source>Change node shapes aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="773"/>
        <source>Select an icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="774"/>
        <source>Images (*.png *.jpg *.jpeg *.svg);;All (*.*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="793"/>
        <source>All shapes have been changed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="798"/>
        <source>Node shape has been changed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="817"/>
        <source>Change all node numbers size to: (1-16)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="821"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="932"/>
        <source>Change font size: Aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="834"/>
        <source>Changed node numbers size.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="868"/>
        <source>Node number color changed. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="893"/>
        <source>Change all node numbers distance from their nodes to: (1-16)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="897"/>
        <source>Change node number distance aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="910"/>
        <source>Changed node number distance.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="928"/>
        <source>Change all node labels text size to: (1-16)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="945"/>
        <source>Changed node label size.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="968"/>
        <source>Label colors changed. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="994"/>
        <source>Change all node labels distance from their nodes to: (1-16)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="998"/>
        <source>Change node label distance aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="1011"/>
        <source>Changed node label distance.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="1038"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="1043"/>
        <source>## NODE </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="1043"/>
        <source> (selected nodes: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="1077"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="972"/>
        <source>Ego Radial layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="1119"/>
        <source>Position (%1, %2):  Node %3, label %4 - In-Degree: %5, Out-Degree: %6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_node.cpp" line="1130"/>
        <source>Position (%1,%2): Double-click to create a new node.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="66"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="78"/>
        <source>Add new relation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="67"/>
        <source>Enter a name for a new relation between the actors.
A relation is a collection of ties of a specific kind between the network actors.
For instance, enter &quot;friendship&quot; if the edges of this relation refer to the set of 
friendships between pairs of actors.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="79"/>
        <source>Enter a name for the new relation (or press Cancel):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="101"/>
        <source>Error. Relation name is used!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="102"/>
        <source>The relation name is already used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="103"/>
        <source>Please use another relation name that is not already used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="115"/>
        <source>Error. No relation name entered!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="116"/>
        <source>You did not type a name for this new relation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="123"/>
        <source>New relation cancelled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="127"/>
        <source>New relation named %1, added.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="157"/>
        <source>Added a new relation named: %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="201"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="470"/>
        <source>Rename current relation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="202"/>
        <source>Enter a new name for this relation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="211"/>
        <source>Not a valid name.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="212"/>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="66"/>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="969"/>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="970"/>
        <source>Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_relation.cpp" line="213"/>
        <source>You did not enter a valid name for this relation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="119"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="128"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="215"/>
        <source>Remove </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="128"/>
        <source> node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="217"/>
        <source>Create a clique from </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="217"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="219"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="221"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="223"/>
        <source> selected nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="219"/>
        <source>Create a star from </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="221"/>
        <source>Create a cycle from </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="223"/>
        <source>Create a line from </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="228"/>
        <source>Create a clique from selected nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="230"/>
        <source>Create a star from selected nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="232"/>
        <source>Create a cycle from selected nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="234"/>
        <source>Create a line from selected nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="264"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="306"/>
        <source>Subgraph of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="267"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="309"/>
        <source>Name the subgraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="268"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="310"/>
        <source>Subgraph name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="282"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_selection.cpp" line="321"/>
        <source>Extracting subgraph...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="44"/>
        <source>GraphML (*.graphml *.xml)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="45"/>
        <source>Pajek (*.net *.paj)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="46"/>
        <source>Adjacency (*.csv *.sm *.adj)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="47"/>
        <source>GraphViz DOT (*.dot)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="48"/>
        <source>UCINET DL (*.dl *.dat)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="49"/>
        <source>Weighted Edge List (*.wlst)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="50"/>
        <source>Simple Edge List (*.lst)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="64"/>
        <source>Save Subgraph As…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="71"/>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="141"/>
        <source>Saving aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="133"/>
        <source>Custom attributes will not be saved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="134"/>
        <source>Format limitation: custom node/edge attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="135"/>
        <source>The chosen format does not support custom node or edge attributes. Those attributes will be lost in the exported file.

Use GraphML to preserve all attributes.

Continue with the chosen format?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="160"/>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="224"/>
        <source>Adjacency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="163"/>
        <source>GraphViz DOT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="166"/>
        <source>Weighted Edge List</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="169"/>
        <source>Simple Edge List</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="176"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="509"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="619"/>
        <source>Only active relation will be exported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="177"/>
        <source>Multi-relation graph — %1 format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="178"/>
        <source>The %1 format supports a single relation. Only the currently active relation &quot;%2&quot; will be written.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="190"/>
        <source>Save edge weights?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="191"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="633"/>
        <source>Weighted graph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="192"/>
        <source>This graph has weighted edges. Include edge weights in the adjacency file?

Select Yes to save weights, No to write 0/1 values only.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/edit/mainwindow_edit_shared.cpp" line="205"/>
        <source>Subgraph saved: %1 nodes, %2 edges → %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="57"/>
        <source>Useful information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="138"/>
        <source>Nothing to do! Load or create a social network first</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="141"/>
        <source>No network! 
Load social network data or create a new social network first. 
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="151"/>
        <source>Nothing to do! Load social network data or create edges first</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="154"/>
        <source>No edges! 
Load social network data or create some edges first. 
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="236"/>
        <source>Tip Of The Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="244"/>
        <source>To create a new node: 
- double-click somewhere on the canvas 
- or press the keyboard shortcut CTRL+. (dot)
- or press the Add Node button on the left panel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="248"/>
        <source>SocNetV can work with either undirected or directed data. When you start SocNetV for the first time, the application uses the &apos;directed data&apos; mode; every edge you create is directed. To enter the &apos;undirected data&apos; mode, press CTRL+E+U or enable the menu option Edit-&gt;Edges-&gt;Undirected Edges </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="253"/>
        <source>If your screen is small, and the canvas appears even smaller hide the Control and/or Statistics panel. Then the canvas will expand to the whole application window. Open the Settings/Preferences dialog-&gt;Window options and disable the two panels.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="258"/>
        <source>A scale-free network is a network whose degree distribution follows a power law. SocNetV generates random scale-free networks according to the Barabási–Albert (BA) model using a preferential attachment mechanism.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="261"/>
        <source>To delete a node permanently: 
- right-click on it and select Remove Node 
- or press CTRL+ALT+. and enter its number
- or press the Remove Node button on the Control Panel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="265"/>
        <source>To rotate the network: 
 - drag the bottom slider to left or right 
 - or click the buttons on the corners of the bottom slider
 - or press CTRL and the left or right arrow.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="269"/>
        <source>To create a new edge between nodes A and B: 
- double-click on node A, then double-click on node B.
- or middle-click on node A, and again on node B.
- or right-click on the node, then select Add Edge from the popup.
- or press the keyboard shortcut CTRL+/ 
- or press the Add Edge button on the Control Panel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="275"/>
        <source>Add a label to an edge by right-clicking on it and selecting Change Label.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="277"/>
        <source>You can change the background color of the canvas. Do it from the menu Options &gt; View or permanently save this setting in Settings/Preferences.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="280"/>
        <source>Default node colors, shapes and sizes can be changed. Open the Settings/Preferences dialog and use the options on the Node tab.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="283"/>
        <source>The Statistics Panel shows network-level information (i.e. density) as well as info about any node you clicked on (inDegrees, outDegrees, clustering).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="286"/>
        <source>You can move any node by left-clicking and dragging it with your mouse. If you want you can move multiple nodes at once. Left-click on empty space on the canvas and drag to create a rectangle selection around them. Then left-click on one of the selected nodes and drag it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="290"/>
        <source>To save the node positions in a network, you need to save your data in a format which supports node positions, suchs as GraphML or Pajek.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="292"/>
        <source>Embed visualization models on the network from the options in the Layout menu or the select boxes on the left Control Panel. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="294"/>
        <source>To change the label of a node right-click on it, and click Selected Node Properties from the popup menu.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="296"/>
        <source>All basic operations of SocNetV are available from the left Control panel or by right-clicking on a Node or an Edge or on canvas empty space.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="298"/>
        <source>Node info (number, position, degree, etc) is displayed on the Status bar, when you left-click on it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="300"/>
        <source>Edge information is displayed on the Status bar, when you left-click on it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="301"/>
        <source>Save your work often, especially when working with large data sets. SocNetV alogorithms are faster when working with saved data. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="304"/>
        <source>You can change the precision of real numbers in reports.  Go to Settings &gt; General and change it under Reports &gt; Real number precision. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="307"/>
        <source>The Closeness Centrality (CC) of a node v, is the inverse sum of the shortest distances between v and every other node. CC is interpreted as the ability to access information through the &apos;grapevine&apos; of network members. Nodes with high closeness centrality are those who can reach many other nodes in few steps. This index can be calculated in both graphs and digraphs. It can also be calculated in weighted graphs although the weight of each edge (v,u) in E is always considered to be 1. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="316"/>
        <source>The Information Centrality (IC) index counts all paths between nodes weighted by strength of tie and distance. This centrality  measure developed by Stephenson and Zelen (1989) focuses on how information might flow through many different paths. This index should be calculated only for undirected graphs. Note: To compute this index, SocNetV drops all isolated nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="330"/>
        <source>Opening the SocNetV Manual in your default web browser....</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="396"/>
        <source>Newer SocNetV version available!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="397"/>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="420"/>
        <source>&lt;p&gt;Your version: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="398"/>
        <source>&lt;p&gt;Remote version: &lt;b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="399"/>
        <source>&lt;p&gt;&lt;b&gt;There is a newer SocNetV version available!&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Do you want to download the latest version now?&lt;/p&gt;&lt;p&gt;Press Yes, and I will open your default web browser for you to download the latest SocNetV package...&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="406"/>
        <source>Opening SocNetV website in your default web browser....</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="421"/>
        <source>&lt;p&gt;Remote version: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="422"/>
        <source>&lt;p&gt;You are running the latest and greatest version of SocNetV.&lt;br/&gt;Nothing to do!&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="447"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2753"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2754"/>
        <source>About SocNetV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="448"/>
        <source>&lt;b&gt;Soc&lt;/b&gt;ial &lt;b&gt;Net&lt;/b&gt;work &lt;b&gt;V&lt;/b&gt;isualizer (SocNetV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="449"/>
        <source>&lt;p&gt;&lt;b&gt;Version&lt;/b&gt;: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="451"/>
        <source>&lt;p&gt;Website: &lt;a href=&quot;https://socnetv.org&quot;&gt;https://socnetv.org&lt;/a&gt;&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="453"/>
        <source>&lt;p&gt;(C) 2005-2026 by Dimitris B. Kalamaras&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="454"/>
        <source>&lt;p&gt;&lt;a href=&quot;https://socnetv.org/contact&quot;&gt;Have questions? Contact us!&lt;/a&gt;&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="456"/>
        <source>&lt;p&gt;&lt;b&gt;Fortune cookie: &lt;/b&gt;&lt;br&gt; &quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="458"/>
        <source>&lt;p&gt;&lt;b&gt;License:&lt;/b&gt;&lt;p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="460"/>
        <source>&lt;p&gt;This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="466"/>
        <source>&lt;p&gt;This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/help/mainwindow_help.cpp" line="472"/>
        <source>&lt;p&gt;You should have received a copy of the GNU General Public License along with this program; If not, see http://www.gnu.org/licenses/&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="41"/>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="43"/>
        <source>Create a new network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="44"/>
        <source>New network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="45"/>
        <source>New

Creates a new social network. First, checks if current network needs to be saved.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="50"/>
        <source>&amp;Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="52"/>
        <source>Open network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="53"/>
        <source>Open a GraphML formatted file of social network data.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="54"/>
        <source>Open

Opens a file of a social network in GraphML format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="66"/>
        <source>&amp;GML</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="67"/>
        <source>Import GML-formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="68"/>
        <source>Import GML

Imports a social network from a GML-formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="72"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="150"/>
        <source>&amp;Pajek</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="73"/>
        <source>Import Pajek-formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="74"/>
        <source>Import Pajek 

Imports a social network from a Pajek-formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="78"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="143"/>
        <source>&amp;Adjacency Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="79"/>
        <source>Import Adjacency matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="80"/>
        <source>Import Sociomatrix 

Imports a social network from an Adjacency matrix-formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="84"/>
        <source>Graph&amp;Viz (.dot)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="85"/>
        <source>Import dot file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="86"/>
        <source>Import GraphViz 

Imports a social network from a GraphViz formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="91"/>
        <source>&amp;UCINET (.dl)...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="92"/>
        <source>ImportDL-formatted file (UCINET)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="93"/>
        <source>Import UCINET

Imports social network data from a DL-formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="97"/>
        <source>&amp;Edge list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="98"/>
        <source>Import an edge list file. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="100"/>
        <source>Import edge list

Import a network from an edgelist file. SocNetV supports EdgeList files with edge weights as well as simple EdgeList files where the edges are non-value (see manual)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="107"/>
        <source>&amp;Two Mode Sociomatrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="108"/>
        <source>Import two-mode sociomatrix (affiliation network) file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="109"/>
        <source>Import Two-Mode Sociomatrix 

Imports a two-mode network from a sociomatrix file. Two-mode networks are described by affiliation network matrices, where A(i,j) codes the events/organizations each actor is affiliated with.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="117"/>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="119"/>
        <source>Save social network to a file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="120"/>
        <source>Save.

Saves the social network to file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="124"/>
        <source>Save As...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="126"/>
        <source>Save network under a new filename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="127"/>
        <source>Save As

Saves the social network under a new filename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="131"/>
        <source>Export to I&amp;mage...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="132"/>
        <source>Export the visible part of the network to image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="133"/>
        <source>Export to Image

Exports the visible part of the current social network to an image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="137"/>
        <source>E&amp;xport to PDF...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="138"/>
        <source>Export the visible part of the network to a PDF file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="139"/>
        <source>Export to PDF

Exports the visible part of the current social network to a PDF document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="144"/>
        <source>Export social network to an adjacency/sociomatrix file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="145"/>
        <source>Export network to Adjacency format

Exports the social network to an adjacency matrix-formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="151"/>
        <source>Export social network to a Pajek-formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="152"/>
        <source>Export Pajek 

Exports the social network to a Pajek-formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="156"/>
        <source>&amp;List</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="157"/>
        <source>Export to List-formatted file. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="158"/>
        <source>Export List

Exports the network to a List-formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="162"/>
        <source>&amp;DL...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="163"/>
        <source>Export network to UCINET-formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="164"/>
        <source>Export UCINET

Exports the active network to a DL-formatted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="168"/>
        <source>&amp;GW...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="169"/>
        <source>Export to GW-formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="170"/>
        <source>Export

Exports the active network to a GW formatted file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="175"/>
        <source>&amp;GraphViz DOT...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="176"/>
        <source>Export the active relation to a GraphViz DOT (.dot) file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="177"/>
        <source>Export GraphViz DOT

Exports the currently active relation to a GraphViz DOT file. Node labels, colors, shapes, and custom attributes are preserved. Only the active relation is exported.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="185"/>
        <source>Nodes as &amp;CSV...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="186"/>
        <source>Export all node data to a CSV file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="191"/>
        <source>Edges as C&amp;SV...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="192"/>
        <source>Export all edge data to a CSV file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="197"/>
        <source>Nodes as &amp;JSON...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="198"/>
        <source>Export all node data to a JSON file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="203"/>
        <source>Edges as J&amp;SON...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="204"/>
        <source>Export all edge data to a JSON file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="208"/>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="210"/>
        <source>Close the actual network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="211"/>
        <source>Close 

Closes the actual network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="214"/>
        <source>&amp;Print</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="216"/>
        <source>Send the currrent social network to the printer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="217"/>
        <source>Print 

Sends whatever is viewable on the canvas to your printer. 
To print the whole social network, you might want to zoom-out.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="224"/>
        <source>E&amp;xit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="226"/>
        <source>Quit SocNetV. Are you sure?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="227"/>
        <source>Exit

Quits the application</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="232"/>
        <source>Open &amp;Text Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="234"/>
        <source>Open a text editor to take notes, copy/paste network data, etc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="237"/>
        <source>&lt;p&gt;&lt;b&gt;Text Editor&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Opens a simple text editor where you can copy paste network data, of any supported format, and save to a file. Then you can import that file to SocNetV. &lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="244"/>
        <source>&amp;View Loaded File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="246"/>
        <source>Display the loaded social network file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="247"/>
        <source>View Loaded File

Displays the loaded social network file </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="252"/>
        <source>View &amp;Adjacency Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="254"/>
        <source>Display the adjacency matrix of the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="256"/>
        <source>&lt;p&gt;&lt;b&gt;View Adjacency Matrix&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Displays the adjacency matrix of the active network. &lt;/p&gt;&lt;p&gt;The adjacency matrix of a social network is a matrix where each element a(i,j) is equal to the weight of the arc from actor (node) i to actor j. &lt;p&gt;If the actors are not connected, then a(i,j)=0. &lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="266"/>
        <source>P&amp;lot Adjacency Matrix (text)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="269"/>
        <source>Plots the adjacency matrix in a text file using unicode characters.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="271"/>
        <source>&lt;p&gt;&lt;b&gt;Plot Adjacency Matrix (text)&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Plots the adjacency matrix in a text file using unicode characters. &lt;/p&gt;&lt;p&gt;In every element (i,j) of the &quot;image&quot;, a black square means actors i and j are connectedwhereas a white square means they are disconnected.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="281"/>
        <source>Create From &amp;Known Data Sets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="284"/>
        <source>Load one of the &apos;famous&apos; social network data sets included in SocNetV.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="286"/>
        <source>&lt;p&gt;&lt;b&gt;Famous Data Sets&lt;/b&gt;&lt;/p&gt;&lt;p&gt;SocNetV includes a number of known (also called famous) data sets in Social Network Analysis, such as Krackhardt&apos;s high-tech managers, etc. Click this menu item or press F7 to load a data set.&lt;/p&gt; </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="295"/>
        <source>Scale-free</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="300"/>
        <source>Create a random network with a power-law degree distribution.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="302"/>
        <source>&lt;p&gt;&lt;b&gt;Scale-free (power-law)&lt;/b&gt;&lt;/p&gt;&lt;p&gt;A scale-free network is a network whose degree distribution follows a power law. SocNetV generates random scale-free networks according to the  Barabási–Albert (BA) model using a preferential attachment mechanism.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="310"/>
        <source>Small World</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="313"/>
        <source>Create a small-world random network, according to the Watts &amp; Strogatz model.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="315"/>
        <source>&lt;p&gt;&lt;b&gt;Small World &lt;/b&gt;&lt;/p&gt;&lt;p&gt;Creates a random small-world network, according to the Watts &amp; Strogatz model. &lt;/p&gt;&lt;p&gt;A small-world network has short average path lengths and high clustering coefficient.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="323"/>
        <source>Erdős–Rényi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="327"/>
        <source>Create a random network according to the Erdős–Rényi model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="329"/>
        <source>&lt;p&gt;&lt;b&gt;Erdős–Rényi &lt;/b&gt;&lt;/p&gt;&lt;p&gt;Creates a random network either of G(n, p) model or G(n,M) model. &lt;/p&gt;&lt;p&gt;The former model creates edges with Bernoulli trials (probability p).&lt;/p&gt;&lt;p&gt;The latter creates a graph of exactly M edges.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="336"/>
        <source>Lattice</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="339"/>
        <source>Create a lattice network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="341"/>
        <source>&lt;p&gt;&lt;b&gt;Lattice &lt;/b&gt;&lt;/p&gt;&lt;p&gt;Creates a random lattice network&lt;/p&gt;&lt;p&gt;A lattice is a network whose drawing forms a regular tiling. Lattices are also known as meshes or grids.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="347"/>
        <source>d-Regular</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="351"/>
        <source>Create a d-regular random network, where every actor has the same degree d.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="354"/>
        <source>&lt;p&gt;&lt;b&gt;d-Regular&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Creates a random network where each actor has the same number &lt;em&gt;d&lt;/em&gt; of neighbours, aka the same degree d.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="361"/>
        <source>Ring Lattice</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="364"/>
        <source>Create a ring lattice random network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="366"/>
        <source>&lt;p&gt;&lt;b&gt;Ring Lattice &lt;/b&gt;&lt;/p&gt;&lt;p&gt;Creates a ring lattice random network. &lt;/p&gt;&lt;p&gt;A ring lattice is a graph with N vertices each connected to d neighbors, d / 2 on each side.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="372"/>
        <source>Gaussian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="375"/>
        <source>Create a Gaussian distributed random network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="376"/>
        <source>Gaussian 

Creates a random network of Gaussian distribution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="379"/>
        <source>&amp;Web Crawler</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="382"/>
        <source>Use the web crawler to create a network from all links found in a given website</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="384"/>
        <source>&lt;p&gt;&lt;b&gt;Web Crawler &lt;/b&gt;&lt;/p&gt;&lt;p&gt;Creates a network of linked webpages, starting from an initial webpage using the built-in Web Crawler. &lt;/p&gt;&lt;p&gt;The web crawler visits the given URL (website or webpage) and parses its contents to find links to other pages (internal or external). If there are such links, it adds them to a queue of URLs. Then, all the URLs in the queue list are visited in a FIFO order and parsed to find more links which are also added to the url queue. The process repeats until it reaches user-defined limits: &lt;/p&gt;&lt;p&gt;Maximum urls to visit (max nodes in the resulting network)&lt;/p&gt; &lt;p&gt;Maximum links per page&lt;/p&gt;&lt;p&gt;Except the initial url and the limits, you can also specify patterns of urls to include or exclude, types of links to follow (internal, external or both) as well as if you want delay between requests (strongly advised)&lt;/p&gt;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="408"/>
        <source>Select/Move</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="411"/>
        <source>&lt;p&gt;&lt;b&gt;Mouse mode: Interactive&lt;/b&gt;&lt;/p&gt; &lt;p&gt;In this interactive mode, you can click on nodes/edges and move them around with your mouse. &lt;/p&gt;&lt;p&gt;Also, you can select multiple items with a rubber band selection area. To move the canvas, use the keyboard arrows.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="414"/>
        <source>Enable the interactive mouse mode to be able to click and move items and select them with a rubber band.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="415"/>
        <source>&lt;p&gt;&lt;b&gt;Mouse Mode: Interactive&lt;/b&gt;&lt;/p&gt;&lt;p&gt;In this mode, you can interact with the items on the canvas using the mouse: &lt;/p&gt;&lt;p&gt;a) double-click to create new nodes, &lt;p&gt;b) left-click or right-click on items (i.e. nodes, edges) to edit their properties&lt;/p&gt;&lt;p&gt;c) move nodes by dragging them with your mouse.  &lt;/p&gt;&lt;p&gt;d) select multiple items with a rubber band.&lt;/p&gt;&lt;p&gt;To move the canvas (up/down, left/right), use the keyboard arrows.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="424"/>
        <source>Scroll/Pan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="427"/>
        <source>&lt;p&gt;&lt;b&gt;Mouse mode: Scrolling&lt;/b&gt;&lt;/p&gt; &lt;p&gt;In this non-interactive mode, you can easily scroll the canvas by dragging the mouse around. All mouse actions are disabled.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="429"/>
        <source>Enable this non-interactive mode to easily scroll the canvas by dragging the mouse around.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="430"/>
        <source>&lt;p&gt;&lt;b&gt;Mouse mode: Scrolling&lt;/b&gt;&lt;/p&gt;&lt;p&gt;In this mode, you cannot interact with the canvas using the mouse.&lt;/p&gt;&lt;p&gt;The cursor changes into a pointing hand, and dragging the mouse around will only scroll the scrolbars.&lt;/p&gt; &lt;p&gt;You will not be able to select any items or move them around with the mouse.&lt;/p&gt;&lt;p&gt;Note: You will still be able to edit the network using the menu or the toolbar actions and icons.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="437"/>
        <source>Next Relation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="439"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="440"/>
        <source>Goto the next relation of the network (if any).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="441"/>
        <source>Next Relation

Loads the next relation of the network (if any)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="445"/>
        <source>Previous Relation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="448"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="450"/>
        <source>Goto the previous relation of the network (if any).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="452"/>
        <source>Previous Relation

Loads the previous relation of the network (if any)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="457"/>
        <source>Add New Relation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="460"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="462"/>
        <source>Add a new relation to the network. Nodes will be preserved, edges will be removed. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="464"/>
        <source>Add New Relation

Adds a new relation to the active network. Nodes will be preserved, edges will be removed. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="469"/>
        <source>Rename Relation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="471"/>
        <source>Rename the current relation of the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="472"/>
        <source>Rename Relation

Renames the current relation of the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="475"/>
        <source>Zoom In</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="477"/>
        <source>Zoom In.

Zooms in the network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="478"/>
        <source>Zoom in the network. Alternatives: use the canvas button, or press Ctrl++, or use mouse wheel while pressing Ctrl.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="480"/>
        <source>Zoom Out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="482"/>
        <source>Zoom Out.

Zooms out of the actual network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="483"/>
        <source>Zoom out the network. Alternatives: use the canvas button, or press Ctrl+-, or use mouse wheel while pressing Ctrl.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="485"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1054"/>
        <source>Rotate counterclockwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="487"/>
        <source>Rotate counterclockwise. You can also use the button underneath the canvas.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="488"/>
        <source>Rotates the network counterclockwise. You can also use the far left button below the canvas.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="490"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1062"/>
        <source>Rotate clockwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="492"/>
        <source>Rotate clockwise. You can also use the button underneath the canvas.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="493"/>
        <source>Rotates the network clockwise. You can also use the far right button below the canvas.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="495"/>
        <source>Reset Zoom and Rotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="497"/>
        <source>Reset zoom and rotation to zero.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="498"/>
        <source>Resets any zoom and rotation transformations to zero.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="500"/>
        <source>Select All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="502"/>
        <source>Select all nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="503"/>
        <source>Select All

Selects all nodes and edges in the network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="506"/>
        <source>Select None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="507"/>
        <source>Ctrl+Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="508"/>
        <source>Deselect all nodes and edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="509"/>
        <source>Deselect all

 Clears the node selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="512"/>
        <source>Find Nodes </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="514"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="515"/>
        <source>Find and select one or more nodes by their number or label.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="516"/>
        <source>Find Node

Finds one or more nodes by their number or label and highlights them by doubling its size. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="521"/>
        <source>Add Node</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="522"/>
        <source>Ctrl+.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="523"/>
        <source>Add a new node to the network in a random position. Alternately, double-click on a specific position the canvas. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="525"/>
        <source>Add a new node to the network in a random position.

Alternately, create a new node by double-clicking on a specific position the canvas. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="528"/>
        <source>Add new node

Add a new node to the network in a random position. 

Alternately, you can create a new node by double-clicking on a specific position the canvas.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="537"/>
        <source>Remove selected node(s). 

If no nodes are selected, you will be prompted for a node number. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="540"/>
        <source>Remove selected node(s). If no nodes are selected, you will be prompted for a node number. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="542"/>
        <source>Remove node

Removes selected node(s) from the network. 
Alternately, you can remove a node by right-clicking on it. 
If no nodes are selected, you will be prompted for a node number. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="549"/>
        <source>Selected Node Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="551"/>
        <source>Change the properties of the selected node(s) 

There must be some nodes on the canvas!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="553"/>
        <source>Change the basic properties of the selected node(s). There must be some nodes on the canvas!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="554"/>
        <source>Selected Node Properties

If there are one or more nodes selected, it opens a properties dialog to edit their label, size, color, shape etc. 
You must have some node selected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="561"/>
        <source>Edit Selection in Data Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="563"/>
        <source>Open the Data Table and pre-select the rows matching the current canvas selection.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="567"/>
        <source>Set property on selected nodes...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="569"/>
        <source>Set a single property (built-in or custom attribute) on all selected nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="573"/>
        <source>Set property on selected edges...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="575"/>
        <source>Set a single property (built-in or custom attribute) on all selected edges.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="580"/>
        <source>Create a clique from selected nodes </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="582"/>
        <source>Connect all selected nodes with edges to create a clique -- There must be some nodes selected!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="584"/>
        <source>Clique from Selected Nodes

Adds all possible edges between selected nodes, so that they become a complete subgraph (clique)
You must have some nodes selected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="592"/>
        <source>Create a star from selected nodes </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="594"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="606"/>
        <source>Connect selected nodes with edges/arcs to create a star -- There must be some nodes selected!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="596"/>
        <source>Star from Selected Nodes

Adds edges between selected nodes, so that they become a star subgraph.
You must have some nodes selected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="604"/>
        <source>Create a cycle from selected nodes </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="608"/>
        <source>Cycle from Selected Nodes

Connect selected nodes so that they become a cycle subgraph.
A cycle graph or circular graph is a graph that consists of a single cycle, or in other words, the vertices are connected in a closed chain. The cycle graph with n vertices is called Cₙ
You must have some nodes selected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="617"/>
        <source>Create a line from selected nodes </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="619"/>
        <source>Connect selected nodes with edges/arcs to create a line-- There must be some nodes selected!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="621"/>
        <source>Line from Selected Nodes

Adds edges between selected nodes, so that they become a line subgraph.
You must have some nodes selected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="628"/>
        <source>Change All Nodes Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="629"/>
        <source>Choose a new color for all nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="630"/>
        <source>Nodes Color

Changes all nodes color at once.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="634"/>
        <source>Change All Nodes Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="635"/>
        <source>Change the size of all nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="636"/>
        <source>Change All Nodes Size

Click to select and apply a new size for all nodes at once.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="640"/>
        <source>Change All Nodes Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="641"/>
        <source>Change the shape of all nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="642"/>
        <source>Change All Nodes Shape

Click to select and apply a new shape for all nodes at once.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="647"/>
        <source>Change All Node Numbers Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="648"/>
        <source>Change the font size of the numbers of all nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="649"/>
        <source>Change Node Numbers Size

Click to select and apply a new font size for all node numbers.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="655"/>
        <source>Change All Node Numbers Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="656"/>
        <source>Change the color of the numbers of all nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="657"/>
        <source>Node Numbers Color

Click to select and apply a new color to all node numbers.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="662"/>
        <source>Change All Node Labels Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="663"/>
        <source>Change the font size of the labels of all nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="664"/>
        <source>Node Labels Size

Click to select and apply a new font-size to all node labels.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="668"/>
        <source>Change All Node Labels Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="669"/>
        <source>Change the color of the labels of all nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="670"/>
        <source>Labels Color

Click to select and apply a new color to all node labels.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="674"/>
        <source>Add Edge (arc)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="676"/>
        <source>Add a directed edge (arc) from a node to another. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="678"/>
        <source>Add a new edge from a node to another.

You can also create an edge between two nodes 
by double-clicking on them consecutively.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="682"/>
        <source>Add edge

Adds a new edge from a node to another.

Alternately, you can create a new edge between two nodes by double-clicking on them consecutively.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="688"/>
        <source>Remove Edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="690"/>
        <source>Remove selected edges from the network. 

If no edge has been clicked or selected, you will be prompted 
to enter edge source and target nodes for the edge to remove.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="693"/>
        <source>Remove selected Edge(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="694"/>
        <source>Remove Edge

Removes edges from the network. 
If one or more edges has been clicked or selected, they are removed. Otherwise, you will be prompted to enter edge source and target nodes for the edge to remove.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="701"/>
        <source>Edge Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="702"/>
        <source>Edit the properties and custom attributes of the clicked edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="703"/>
        <source>Edge Properties

Opens a dialog to edit the label, weight, color and custom attributes of the selected edge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="708"/>
        <source>Change Edge Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="709"/>
        <source>Change the Label of an Edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="710"/>
        <source>Change Edge Label

Changes the label of an Edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="714"/>
        <source>Change Edge Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="715"/>
        <source>Change the Color of an Edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="716"/>
        <source>Change Edge Color

Changes the Color of an Edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="720"/>
        <source>Change Edge Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="721"/>
        <source>Change the weight of an Edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="722"/>
        <source>Edge Weight

Changes the Weight of an Edge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="726"/>
        <source>Change All Edges Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="727"/>
        <source>Change the color of all Edges.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="728"/>
        <source>All Edges Color

Changes the color of all Edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="732"/>
        <source>Symmetrize All Edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="734"/>
        <source>Make all directed ties to be reciprocated (thus, a symmetric graph).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="736"/>
        <source>&lt;p&gt;&lt;b&gt;Symmetrize All Edges&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Forces all edges in this relation to be reciprocated: &lt;p&gt;If there is a directed edge from node A to node B 
then a new directed edge from node B to node A will be 
 created, with the same weight. &lt;/p&gt;&lt;p&gt;The result is a symmetric network.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="744"/>
        <source>Symmetrize by Strong Ties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="746"/>
        <source>Create a new symmetric relation by counting reciprocated ties only (strong ties).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="748"/>
        <source>&lt;p&gt;&lt;b&gt;Symmetrize Edges by Strong Ties:&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Creates a new symmetric relation by keeping strong ties only. &lt;/p&gt;&lt;p&gt;A tie between actors A and B is considered strong if both A -&gt; B and B -&gt; A exist. Therefore, in the new relation, a reciprocated edge will be created between actors A and B only if both arcs A-&gt;B and B-&gt;A were present in the current or all relations. &lt;/p&gt;&lt;p&gt;If the network is multi-relational, it will ask you whether ties in the current relation or all relations are to be considered.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="759"/>
        <source>Undirected Edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="761"/>
        <source>Enable to transform all arcs to undirected edges and hereafter work with undirected edges .</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="763"/>
        <source>Undirected Edges

Transforms all directed arcs to undirected edges. 
The result is a undirected and symmetric network.After that, every new edge you add, will be undirected too.If you disable this, then all edges become directed again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="773"/>
        <source>Cocitation Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="775"/>
        <source>Create a new symmetric relation by connecting actors that are cocitated by others.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="778"/>
        <source>&lt;p&gt;&lt;b&gt;Symmetrize Edges by examining Cocitation:&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Creates a new symmetric relation by connecting actors that are cocitated by others. In the new relation, an edge will be created between actor i and actor j only if C(i,j) &gt; 0, where C the Cocitation Matrix. &lt;/p&gt;&lt;p&gt;Thus the actor pairs cited by more common neighbors will appear with a stronger tie between them than pairs those cited by fewer common neighbors. The resulting relation is symmetric.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="790"/>
        <source>Dichotomize Valued Edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="792"/>
        <source>Create a new binary relation/graph in a valued network using edge dichotomization.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="795"/>
        <source>Dichotomize Edges

Creates a new binary relation in a valued network using edge dichotomization according to a given threshold value. 
In the new dichotomized relation, an edge will exist between actor i and actor j only if e(i,j) &gt; threshold, where threshold is a user-defined value.Thus the dichotomization procedure is as follows: Choose a threshold value, set all ties with equal or higher values to equal one, and all lower to equal zero.The result is a binary (dichotomized) graph. The process is also known as compression and slicing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="808"/>
        <source>Transform Nodes to Edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="809"/>
        <source>Transforms the network so that nodes become Edges and vice versa</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="811"/>
        <source>Transform Nodes EdgesAct

Transforms network so that nodes become Edges and vice versa</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="816"/>
        <source>Filter Nodes By Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="818"/>
        <source>Temporarily filter out nodes according to their centrality score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="819"/>
        <source>Filter Nodes By Centrality

Filters out nodes according to their score in a user-selected centrality index.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="823"/>
        <source>Filter by Attribute...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="825"/>
        <source>Show only nodes or edges matching a custom attribute condition (key, operator, value).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="826"/>
        <source>Filter by Attribute

Opens a dialog to filter nodes, edges, or both by a custom attribute. Non-matching elements are hidden (reversible via Restore All Nodes).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="831"/>
        <source>Query Builder...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="833"/>
        <source>Build a multi-condition AND filter for nodes or edges.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="834"/>
        <source>Query Builder

Opens the Query Builder dialog to compose a filter with multiple attribute conditions (AND logic). All conditions must match for a node or edge to remain visible.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="840"/>
        <source>Focus on Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="842"/>
        <source>Show only the selected nodes and edges between them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="843"/>
        <source>Focus on Selection

Hides all nodes except the currently selected ones. Only edges between selected nodes remain visible. Use &apos;Restore All Nodes&apos; to undo.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="850"/>
        <source>Focus on Node (Ego Network)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="852"/>
        <source>Show only the selected node and its direct neighbors.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="853"/>
        <source>Focus on Node (Ego Network)

Hides all nodes except the selected node and its direct neighbors. Use &apos;Restore All Nodes&apos; to undo.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="859"/>
        <source>Restore All Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="861"/>
        <source>Restore all nodes hidden by the last filter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="865"/>
        <source>Disable Isolate Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="870"/>
        <source>Temporarily filter out nodes with no edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="871"/>
        <source>Filter Isolate Nodes

Enables or disables displaying of isolate nodes. Isolate nodes are those with no edges...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="877"/>
        <source>Filter Edges by Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="880"/>
        <source>Temporarily filter edges of some weight out of the network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="881"/>
        <source>Filter Edges

Filters edges according to their weight.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="886"/>
        <source>Restore All Edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="888"/>
        <source>Restore all edges hidden by the weight filter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="889"/>
        <source>Restore All Edges

Re-enables all edges hidden by the weight filter. No data is modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="896"/>
        <source>Disable unilateral edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="901"/>
        <source>Temporarily disable all unilateral (non-reciprocal) edges in this relation. Keeps only &quot;strong&quot; ties.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="902"/>
        <source>Unilateral edges

In directed networks, a tie between two actors is unilateral when only one actor identifies the other as connected (i.e. friend, vote, etc). A unilateral tie is depicted as a single arc. These ties are considered weak, as opposed to reciprocal ties where both actors identify each other as connected. Strong ties are depicted as either a single undirected edge or as two reciprocated arcs between two nodes. By selecting this option, all unilateral edges in this relation will be disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="915"/>
        <source>Save visible nodes as subgraph...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="917"/>
        <source>Copy the currently visible (non-filtered) nodes and their inter-edges into a new graph file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="918"/>
        <source>Save visible nodes as subgraph

Creates an independent copy of the nodes and edges that are currently visible on the canvas (i.e. not hidden by any filter). Vertices are renumbered from 1; all visual properties and custom attributes are preserved. You will be prompted for a name and a save location.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="927"/>
        <source>Save selected nodes as subgraph...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="929"/>
        <source>Copy the currently selected nodes and their inter-edges into a new graph file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="930"/>
        <source>Save selected nodes as subgraph

Creates an independent copy of the selected nodes and the edges that run between them. Vertices are renumbered from 1; all visual properties and custom attributes are preserved. You will be prompted for a name and a save location.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="941"/>
        <source>Strong Structural</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="942"/>
        <source>Nodes are assigned the same color if they have identical in and out neighborhoods</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="943"/>
        <source>Click this to colorize nodes; Nodes are assigned the same color if they have identical in and out neighborhoods</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="946"/>
        <source>Regular</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="948"/>
        <source>Nodes are assigned the same color if they have neighborhoods of the same set of colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="952"/>
        <source>Click this to colorize nodes; Nodes are assigned the same color if they have neighborhoods of the same set of colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="957"/>
        <source>Random</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="959"/>
        <source>Layout the network actors in random positions.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="960"/>
        <source>Random Layout

 This layout algorithm repositions all network actors in random positions.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="965"/>
        <source>Random Circles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="967"/>
        <source>Layout the network in random concentric circles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="969"/>
        <source>Random Circles Layout

 Repositions the nodes randomly on circles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="974"/>
        <source>Place the selected vertex at center, its neighbors on an inner ring, all others on an outer ring</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="975"/>
        <source>Ego Radial Layout

Places the selected vertex at the canvas center, its 1-hop out-neighbors on an inner ring, and all remaining nodes on an outer ring.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="978"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1172"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1372"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1569"/>
        <source>Degree Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="982"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their Degree Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="985"/>
        <source>Degree Centrality (DC) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their Degree Centrality score. Nodes with higher DC are closer to the centre.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="992"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1186"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1387"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1583"/>
        <source>Closeness Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="996"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their Closeness Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="999"/>
        <source>Closeness Centrality (CC) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their Closeness Centrality. Nodes having higher CC are closer to the centre.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1007"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1202"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1403"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1599"/>
        <source>Influence Range Closeness Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1011"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their Influence Range Closeness Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1014"/>
        <source>Influence Range Closeness Centrality (IRCC) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their IRCC score. Nodes having higher IRCC are closer to the centre.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1021"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1217"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1418"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1614"/>
        <source>Betweenness Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1024"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their Betweenness Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1027"/>
        <source>Betweenness Centrality (BC) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their Betweenness Centrality. Nodes having higher BC are closer to the centre.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1034"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1230"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1431"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1627"/>
        <source>Stress Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1037"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their Stress Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1040"/>
        <source>Stress Centrality (SC) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their Stress Centrality score. Nodes having higher SC are closer to the centre.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1047"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1243"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1444"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1640"/>
        <source>Eccentricity Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1050"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their Eccentricity Centrality (aka Harary Graph Centrality).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1053"/>
        <source>Eccentricity Centrality (EC) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their Eccentricity Centrality (aka Harary Graph Centrality) score. Nodes having higher EC are closer to the centre.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1061"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1257"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1457"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1653"/>
        <source>Power Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1064"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their Power Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1067"/>
        <source>Power Centrality (PC) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their Power Centrality score. Nodes having higher PC are closer to the centre.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1074"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1270"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1470"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1666"/>
        <source>Information Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1078"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their Information Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1081"/>
        <source>Information Centrality (IC) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their Information Centrality score. Nodes of higher IC are closer to the centre.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1088"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1284"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1484"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1680"/>
        <source>Eigenvector Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1092"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their Eigenvector Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1095"/>
        <source>Eigenvector Centrality (EVC) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their Eigenvector Centrality score. Nodes of higher EVC are closer to the centre.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1102"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1299"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1498"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1694"/>
        <source>Katz Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1105"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their Katz Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1108"/>
        <source>Katz Centrality (KC) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their Katz Centrality score. Nodes of higher KC are closer to the centre. Requires Katz Centrality to have been computed first (Analyze &gt; Centrality &gt; Katz Centrality).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1117"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1315"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1513"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1709"/>
        <source>Bonacich Power Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1120"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their Bonacich Power Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1123"/>
        <source>Bonacich Power Centrality (BPC) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their Bonacich Power Centrality score. Nodes of higher BPC are closer to the centre. Requires Bonacich Power Centrality to have been computed first (Analyze &gt; Centrality &gt; Bonacich Power Centrality).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1132"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1331"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1528"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1724"/>
        <source>Degree Prestige</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1135"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their Degree Prestige (inDegree).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1138"/>
        <source>Degree Prestige (DP) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their inDegree score. Nodes having higher DP are closer to the centre.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1145"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1344"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1541"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1737"/>
        <source>PageRank Prestige</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1149"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their PRP index.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1152"/>
        <source>PageRank Prestige (PRP) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their PageRank score. Nodes having higher PRP are closer to the centre.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1159"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1358"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1555"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1751"/>
        <source>Proximity Prestige</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1162"/>
        <source>Place all nodes on concentric circles of radius inversely proportional to their Proximity Prestige.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1165"/>
        <source>Proximity Prestige (PP) Radial Layout

Repositions all nodes on concentric circles of radius inversely proportional to their PP index. Nodes having higher PP score are closer to the centre.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1176"/>
        <source>Place all nodes on horizontal levels of height proportional to their Degree Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1179"/>
        <source>Degree Centrality (DC) Levels Layout

Repositions all nodes on horizontal levels of heightproportional to their DC score. Nodes having higher DC are closer to the top.

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1190"/>
        <source>Place all nodes on horizontal levels of height proportional to their Closeness Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1193"/>
        <source>Closeness Centrality (CC) Levels Layout

Repositions all nodes on horizontal levels of heightproportional to their Closeness Centrality score. Nodes of higher CC are closer to the top.

This layout can be computed only for connected graphs. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1206"/>
        <source>Place all nodes on horizontal levels of height proportional to their Influence Range Closeness Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1209"/>
        <source>Influence Range Closeness Centrality (IRCC) Levels Layout

Repositions all nodes on horizontal levels of heightproportional to their IRCC score. Nodes having higher IRCC are closer to the top.

This layout can be computed for not connected graphs. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1220"/>
        <source>Place all nodes on horizontal levels of height proportional to their Betweenness Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1223"/>
        <source>Betweenness Centrality (BC) Levels Layout

Repositions all nodes on horizontal levels of heightproportional to their Betweenness Centrality score. Nodes having higher BC are closer to the top.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1233"/>
        <source>Place nodes on horizontal levels of height proportional to their Stress Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1236"/>
        <source>Stress Centrality (SC) Levels Layout

Repositions all nodes on horizontal levels of heightproportional to their Stress Centrality score. Nodes having higher SC are closer to the top.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1246"/>
        <source>Place nodes on horizontal levels of height proportional to their Eccentricity Centrality (aka Harary Graph Centrality).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1249"/>
        <source>Eccentricity Centrality (EC) Levels Layout

Repositions all nodes on horizontal levels of heightproportional to their Eccentricity Centrality (aka Harary Graph Centrality) score. Nodes having higher EC are closer to the top.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1260"/>
        <source>Place nodes on horizontal levels of height proportional to their Power Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1263"/>
        <source>Power Centrality (PC) Levels Layout

Repositions all nodes on horizontal levels of heightproportional to their Power Centrality score. Nodes having higher PC are closer to the top.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1274"/>
        <source>Place nodes on horizontal levels of height proportional to their Information Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1277"/>
        <source>Information Centrality (IC) Levels Layout

Repositions all nodes on horizontal levels of heightproportional to their Information Centrality score. Nodes having higher IC are closer to the top.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1288"/>
        <source>Place nodes on horizontal levels of height proportional to their Eigenvector Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1292"/>
        <source>Eigenvector Centrality (EVC) Levels Layout

Repositions all nodes on horizontal levels of heightproportional to their Eigenvector Centrality score. Nodes having higher EVC are closer to the top.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1302"/>
        <source>Place nodes on horizontal levels of height proportional to their Katz Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1306"/>
        <source>Katz Centrality (KC) Levels Layout

Repositions all nodes on horizontal levels of height proportional to their Katz Centrality score. Nodes having higher KC are closer to the top. Requires Katz Centrality to have been computed first (Analyze &gt; Centrality &gt; Katz Centrality).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1318"/>
        <source>Place nodes on horizontal levels of height proportional to their Bonacich Power Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1322"/>
        <source>Bonacich Power Centrality (BPC) Levels Layout

Repositions all nodes on horizontal levels of height proportional to their Bonacich Power Centrality score. Nodes having higher BPC are closer to the top. Requires Bonacich Power Centrality to have been computed first (Analyze &gt; Centrality &gt; Bonacich Power Centrality).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1334"/>
        <source>Place nodes on horizontal levels of height proportional to their Degree Prestige.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1337"/>
        <source>Degree Prestige (DP) Levels Layout

Repositions all nodes on horizontal levels of heightproportional to their Degree Prestige score. Nodes having higher DP are closer to the top.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1348"/>
        <source>Place nodes on horizontal levels of height proportional to their PageRank Prestige.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1351"/>
        <source>PageRank Prestige (PRP) Levels Layout

Repositions all nodes on horizontal levels of heightproportional to their PageRank Prestige score. Nodes having higher PRP are closer to the top.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1362"/>
        <source>Place nodes on horizontal levels of height proportional to their Proximity Prestige.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1365"/>
        <source>Proximity Prestige (PP) Levels Layout

Repositions all nodes on horizontal levels of heightproportional to their Proximity Prestige score. Nodes having higher PP are closer to the top.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1376"/>
        <source>Resize all nodes to be proportional to their Degree Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1379"/>
        <source>Degree Centrality (DC) Node Size Layout

Changes the size of all nodes to be proportional to their DC (inDegree) score. 

Nodes having higher DC will appear bigger.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1391"/>
        <source>Resize all nodes to be proportional to their Closeness Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1394"/>
        <source>Closeness Centrality (CC) Node Size Layout

Changes the size of all nodes to be proportional to their CC score. Nodes of higher CC will appear bigger.

This layout can be computed only for connected graphs. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1407"/>
        <source>Resize all nodes to be proportional to their Influence Range Closeness Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1410"/>
        <source>Influence Range Closeness Centrality (IRCC) Node Size Layout

Changes the size of all nodes to be proportional to their IRCC score. Nodes having higher IRCC will appear bigger.

This layout can be computed for not connected graphs. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1421"/>
        <source>Resize all nodes to be proportional to their Betweenness Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1424"/>
        <source>Betweenness Centrality (BC) Node Size Layout

Changes the size of all nodes to be proportional to their Betweenness Centrality score. Nodes having higher BC will appear bigger.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1434"/>
        <source>Resize all nodes to be  proportional to their Stress Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1437"/>
        <source>Stress Centrality (SC) Node Size Layout

Changes the size of all nodes to be proportional to their Stress Centrality score. Nodes having higher SC will appear bigger.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1447"/>
        <source>Resize all nodes to be proportional to their Eccentricity Centrality (aka Harary Graph Centrality).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1450"/>
        <source>Eccentricity Centrality (EC) NodeSizes Layout

Changes the size of all nodes to be proportional to their Eccentricity Centrality (aka Harary Graph Centrality) score. Nodes having higher EC will appear bigger.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1460"/>
        <source>Resize all nodes to be proportional to their Power Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1463"/>
        <source>Power Centrality (PC) Node Size Layout

Changes the size of all nodes to be proportional to their Power Centrality score. Nodes having higher PC will appear bigger.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1474"/>
        <source>Resize all nodes to be proportional to their Information Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1477"/>
        <source>Information Centrality (IC) Node Size Layout

Changes the size of all nodes to be proportional to their Information Centrality score. Nodes having higher IC will appear bigger.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1488"/>
        <source>Resize all nodes to be proportional to their Eigenvector Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1491"/>
        <source>Eigenvector Centrality (EVC) Node Size Layout

Changes the size of all nodes to be proportional to their Eigenvector Centrality score. Nodes having higher EVC will appear bigger.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1501"/>
        <source>Resize all nodes to be proportional to their Katz Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1504"/>
        <source>Katz Centrality (KC) Node Size Layout

Changes the size of all nodes to be proportional to their Katz Centrality score. Nodes having higher KC will appear bigger. Requires Katz Centrality to have been computed first (Analyze &gt; Centrality &gt; Katz Centrality).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1516"/>
        <source>Resize all nodes to be proportional to their Bonacich Power Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1519"/>
        <source>Bonacich Power Centrality (BPC) Node Size Layout

Changes the size of all nodes to be proportional to their Bonacich Power Centrality score. Nodes having higher BPC will appear bigger. Requires Bonacich Power Centrality to have been computed first (Analyze &gt; Centrality &gt; Bonacich Power Centrality).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1531"/>
        <source>Resize all nodes to be proportional to their Degree Prestige.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1534"/>
        <source>Degree Prestige (DP) Node Size Layout

Changes the size of all nodes to be proportional to their Degree Prestige score. Nodes having higher DP will appear bigger.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1545"/>
        <source>Resize all nodes to be proportional to their PageRank Prestige.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1548"/>
        <source>PageRank Prestige (PRP) Node Size Layout

Changes the size of all nodes to be proportional to their PageRank Prestige score. Nodes having higher PRP will appear bigger.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1559"/>
        <source>Resize all nodes to be proportional to their Proximity Prestige.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1562"/>
        <source>Proximity Prestige (PP) Node Size Layout

Changes the size of all nodes to be proportional to their Proximity Prestige score. Nodes having higher PP will appear bigger.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1573"/>
        <source>Change the color of all nodes to reflect their Degree Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1576"/>
        <source>Degree Centrality (DC) Node Color Layout

Changes the color of all nodes to reflect their DC (inDegree) score. 

Nodes having higher DC will have warmer color (i.e. red).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1587"/>
        <source>Change the color of all nodes to reflect their Closeness Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1590"/>
        <source>Closeness Centrality (CC) Node Color Layout

Changes the color of all nodes to reflect their CC score. Nodes of higher CC will have warmer color (i.e. red).

This layout can be computed only for connected graphs. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1603"/>
        <source>Change the color of all nodes to proportional to their Influence Range Closeness Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1606"/>
        <source>Influence Range Closeness Centrality (IRCC) Node Color Layout

Changes the color of all nodes to reflect their IRCC score. Nodes having higher IRCC will have warmer color (i.e. red).

This layout can be computed for not connected graphs. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1617"/>
        <source>Change the color of all nodes to reflect their Betweenness Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1620"/>
        <source>Betweenness Centrality (BC) Node Color Layout

Changes the color of all nodes to reflect their Betweenness Centrality score. Nodes having higher BC will have warmer color (i.e. red).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1630"/>
        <source>Change the color of all nodes to  reflect their Stress Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1633"/>
        <source>Stress Centrality (SC) Node Color Layout

Changes the color of all nodes to reflect their Stress Centrality score. Nodes having higher SC will have warmer color (i.e. red).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1643"/>
        <source>Change the color of all nodes to reflect their Eccentricity Centrality (aka Harary Graph Centrality).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1646"/>
        <source>Eccentricity Centrality (EC) NodeColors Layout

Changes the color of all nodes to reflect their Eccentricity Centrality (aka Harary Graph Centrality) score. Nodes having higher EC will have warmer color (i.e. red).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1656"/>
        <source>Change the color of all nodes to reflect their Power Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1659"/>
        <source>Power Centrality (PC) Node Color Layout

Changes the color of all nodes to reflect their Power Centrality score. Nodes having higher PC will have warmer color (i.e. red).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1670"/>
        <source>Change the color of all nodes to reflect their Information Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1673"/>
        <source>Information Centrality (IC) Node Color Layout

Changes the color of all nodes to reflect their Information Centrality score. Nodes having higher IC will have warmer color (i.e. red).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1684"/>
        <source>Change the color of all nodes to reflect their Eigenvector Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1687"/>
        <source>Eigenvector Centrality (EVC) Node Color Layout

Changes the color of all nodes to reflect their Eigenvector Centrality score. Nodes having higher EVC will have warmer color (i.e. red).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1697"/>
        <source>Change the color of all nodes to reflect their Katz Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1700"/>
        <source>Katz Centrality (KC) Node Color Layout

Changes the color of all nodes to reflect their Katz Centrality score. Nodes having higher KC will have warmer color (i.e. red). Requires Katz Centrality to have been computed first (Analyze &gt; Centrality &gt; Katz Centrality).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1712"/>
        <source>Change the color of all nodes to reflect their Bonacich Power Centrality.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1715"/>
        <source>Bonacich Power Centrality (BPC) Node Color Layout

Changes the color of all nodes to reflect their Bonacich Power Centrality score. Nodes having higher BPC will have warmer color (i.e. red). Requires Bonacich Power Centrality to have been computed first (Analyze &gt; Centrality &gt; Bonacich Power Centrality).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1727"/>
        <source>Change the color of all nodes to reflect their Degree Prestige.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1730"/>
        <source>Degree Prestige (DP) Node Color Layout

Changes the color of all nodes to reflect their Degree Prestige score. Nodes having higher DP will have warmer color (i.e. red).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1741"/>
        <source>Change the color of all nodes to reflect their PageRank Prestige.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1744"/>
        <source>PageRank Prestige (PRP) Node Color Layout

Changes the color of all nodes to reflect their PageRank Prestige score. Nodes having higher PRP will have warmer color (i.e. red).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1755"/>
        <source>Change the color of all nodes to reflect their Proximity Prestige.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1758"/>
        <source>Proximity Prestige (PP) Node Color Layout

Changes the color of all nodes to reflect their PageRank Prestige score. Nodes of higher PP will have warmer color (i.e. red).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1765"/>
        <source>Clustering Coefficient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1769"/>
        <source>Change the color of all nodes to reflect their local Clustering Coefficient.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1772"/>
        <source>Clustering Coefficient Node Color Layout

Changes the color of all nodes to reflect their local Clustering Coefficient (Watts-Strogatz). Nodes with higher clustering will have warmer color (i.e. red).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1779"/>
        <source>Node Color by Connected Component</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1782"/>
        <source>Color nodes by their weakly connected component.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1784"/>
        <source>Node Color by Connected Component

Assigns a distinct color to each weakly connected component. All nodes in the same component share the same color, making isolated sub-networks immediately visible.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1791"/>
        <source>Spring Embedder (Eades)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1795"/>
        <source>Layout Eades Spring-Gravitational model.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1797"/>
        <source>Spring Embedder Layout

 The Spring Embedder model (Eades, 1984), part of the Force Directed Placement (FDP) family, embeds a mechanical system in the graph by replacing nodes with rings and edges with springs. 
In our implementation, nodes are replaced by physical bodies (i.e. electrons) which exert repelling forces to each other, while edges are replaced by springs which exert attractive forces to the adjacent nodes. The nodes are placed in some initial layout and let go so that the spring forces move the system to a minimal energy state. The algorithm continues until the system retains an equilibrium state in which all forces cancel each other. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1812"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="677"/>
        <source>Fruchterman-Reingold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1815"/>
        <source>Repelling forces between all nodes, and attracting forces between adjacent nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1817"/>
        <source>Fruchterman-Reingold Layout

 Embeds a layout all nodes according to a model in which	repelling forces are used between every pair of nodes, while attracting forces are used only between adjacent nodes. The algorithm continues until the system retains its equilibrium state where all forces cancel each other.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1825"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="676"/>
        <source>Kamada-Kawai</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1828"/>
        <source>Embeds the Kamada-Kawai FDP layout model, the best variant of the Spring Embedder family of models.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1830"/>
        <source>&lt;p&gt;&lt;em&gt;Kamada-Kawai&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The best variant of the Spring Embedder family of models. &lt;p&gt;In this the graph is considered to be a dynamic system where every edge is between two actors is a &apos;spring&apos; of a desirable length, which corresponds to their graph theoretic distance. &lt;/p&gt;&lt;p&gt;In this way, the optimal layout of the graph 
is the state with the minimum imbalance. The degree of imbalance is formulated as the total spring energy: the square summation of the differences between desirable distances and real ones for all pairs of vertices.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1845"/>
        <source>Layout GuideLines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1846"/>
        <source>Toggles layout guidelines on or off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1847"/>
        <source>Layout Guidelines

Layout Guidelines are circular or horizontal lines 
usually created when embedding prominence-based 
visualization models on the network.
Disable this checkbox to hide guidelines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1860"/>
        <source>Invert Adjacency Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1863"/>
        <source>Invert the adjacency matrix, if possible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1864"/>
        <source>Invert  Adjacency Matrix 

Inverts the adjacency matrix using linear algebra methods.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1870"/>
        <source>Transpose Adjacency Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1873"/>
        <source>View the transpose of adjacency matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1874"/>
        <source>Transpose Adjacency Matrix 

Computes and displays the adjacency matrix tranpose.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1880"/>
        <source>Cocitation Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1883"/>
        <source>Compute the Cocitation matrix of this network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1884"/>
        <source>Cocitation Matrix 

 Computes and displays the cocitation matrix of the network. The Cocitation matrix, C=A*A^T, is a NxN matrix where each element (i,j) is the number of actors that have outbound ties/links to both actors i and j. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1893"/>
        <source>Degree Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1896"/>
        <source>Compute the Degree matrix of the network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1897"/>
        <source>Degree Matrix 

 Compute the Degree matrix of the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1902"/>
        <source>Laplacian Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1905"/>
        <source>Compute the Laplacian matrix of the network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1906"/>
        <source>Laplacian Matrix 

Compute the Laplacian matrix of the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1911"/>
        <source>Reciprocity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1914"/>
        <source>Compute the arc and dyad reciprocity of the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1916"/>
        <source>Arc and Dyad Reciprocity

The arc reciprocity of a network/graph is the fraction of reciprocated ties over all present ties of the graph. 
The dyad reciprocity of a network/graph is the fraction of actor pairs that have reciprocated ties over all connected pairs of actors. 
In a directed network, the arc reciprocity measures the proportion of directed edges that are bidirectional. If the reciprocity is 1, 
then the adjacency matrix is structurally symmetric. 
Likewise, in a directed network, the dyad reciprocity measures the proportion of connected actor dyads that have bidirectional ties between them. 
In an undirected graph, all edges are reciprocal. Thus the reciprocity of the graph is always 1. 
Reciprocity can be computed on undirected, directed, and weighted graphs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1935"/>
        <source>Symmetry Test</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1938"/>
        <source>Check whether the network is symmetric or not</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1940"/>
        <source>Symmetry

Checks whether the network is symmetric or not. 
A network is symmetric when all edges are reciprocal, or, in mathematical language, when the adjacency matrix is symmetric.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1949"/>
        <source>Geodesic Distance between 2 nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1953"/>
        <source>Compute the length of the shortest path (geodesic distance) between 2 nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1955"/>
        <source>Distance

Computes the geodesic distance between two nodes.In graph theory, the geodesic distance of two nodes is the length (number of edges) of the shortest path between them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1962"/>
        <source>Geodesic Distances Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1966"/>
        <source>Compute the matrix of geodesic distances between all pair of nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1968"/>
        <source>Distances Matrix

Computes the matrix of distances between all pairs of actors/nodes in the social network.A distances matrix is a n x n matrix, in which the (i,j) element is the distance from node i to node jThe distance of two nodes is the length of the shortest path between them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1976"/>
        <source>Geodesics Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1979"/>
        <source>Compute the number of shortest paths (geodesics) between each pair of nodes </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1981"/>
        <source>Geodesics Matrix

Displays a n x n matrix, where the (i,j) element is the number of shortest paths (geodesics) between node i and node j. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1989"/>
        <source>Graph Diameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1992"/>
        <source>Compute the diameter of the network, the maximum geodesic distance between any actors.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1994"/>
        <source>Diameter

 The diameter of a network is the maximum geodesic distance (maximum shortest path length) between any two nodes of the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="1999"/>
        <source>Average Distance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2002"/>
        <source>Compute the average graph distance for all possible pairs of nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2004"/>
        <source>Average Graph Distance

 This is the average length of shortest paths (geodesics) for all possible pairs of nodes. It is a measure of the efficiency or compactness of the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2011"/>
        <source>Geodesic Distance Distribution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2015"/>
        <source>Show the distribution of geodesic distances across all pairs of nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2017"/>
        <source>Geodesic Distance Distribution

Counts how many ordered pairs of nodes are separated by each geodesic distance d (d = 1, 2, …, diameter).  Useful for understanding the shape of the network&apos;s distance structure — e.g. whether most pairs are at distance 2 (&quot;small world&quot;) or spread across many distances.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2026"/>
        <source>Eccentricity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2029"/>
        <source>Compute the Eccentricity of each actor and group Eccentricity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2030"/>
        <source>Eccentricity

The eccentricity of each node i in a network or graph is the largest geodesic distance between node i and any other node j. Therefore, it reflects how far, at most, is each node from every other node. 
The maximum eccentricity is the graph diameter while the minimum is the graph radius.
This index can be calculated in both graphs and digraphs but is usually best suited for undirected graphs. 
It can also be calculated in weighted graphs although the weight of each edge (v,u) in E is always considered to be 1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2049"/>
        <source>Check whether the network is a connected graph, a connected digraph or a disconnected graph/digraph...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2052"/>
        <source>Connectedness

 In graph theory, a graph is &lt;b&gt;connected&lt;/b&gt; if there is a path between every pair of nodes. 
A digraph is &lt;b&gt;strongly connected&lt;/b&gt; if there the a path from i to j and from j to i for all pairs (i,j).
A digraph is weakly connected if at least a pair of nodes are joined by a semipath.
A digraph or a graph is disconnected if at least one node is isolate.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2066"/>
        <source>Compute the minimum number of nodes that must be removed to disconnect two nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2068"/>
        <source>Node Connectivity

The local vertex connectivity of two nodes s and t is the minimum number of other nodes that must be removed to disconnect t from s.
If s and t are directly connected by an edge, no such removal exists, since the edge itself always keeps them connected.
For directed networks, asks whether to respect edge direction (strong) or ignore it (weak).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2079"/>
        <source>Compute the network&apos;s overall vertex connectivity.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2081"/>
        <source>Graph Connectivity

The vertex connectivity of the whole network is the minimum, over every pair of nodes, of their local vertex connectivity - i.e. the fewest nodes that would need to be removed to disconnect the network at its weakest point.
For directed networks, asks whether to respect edge direction (strong) or ignore it (weak).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2089"/>
        <source>Walks of a given length</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2092"/>
        <source>Compute the number of walks of a given length between any nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2093"/>
        <source>Walks of a given length

A walk is a sequence of alternating vertices and edges such as v&lt;sub&gt;0&lt;/sub&gt;e&lt;sub&gt;1&lt;/sub&gt;, v&lt;sub&gt;1&lt;/sub&gt;e&lt;sub&gt;2&lt;/sub&gt;, v&lt;sub&gt;2&lt;/sub&gt;e&lt;sub&gt;3&lt;/sub&gt;, …, e&lt;sub&gt;k&lt;/sub&gt;v&lt;sub&gt;k&lt;/sub&gt;, where each edge, e&lt;sub&gt;i&lt;/sub&gt; is defined as e&lt;sub&gt;i&lt;/sub&gt; = {v&lt;sub&gt;i-1&lt;/sub&gt;, v&lt;sub&gt;i&lt;/sub&gt;}. This function counts the number of walks of a given length between each pair of nodes, by studying the powers of the sociomatrix.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2103"/>
        <source>Total Walks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2106"/>
        <source>Calculate the total number of walks of every possible length between all nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2107"/>
        <source>Total Walks

A walk is a sequence of alternating vertices and edges such as v&lt;sub&gt;0&lt;/sub&gt;e&lt;sub&gt;1&lt;/sub&gt;, v&lt;sub&gt;1&lt;/sub&gt;e&lt;sub&gt;2&lt;/sub&gt;, v&lt;sub&gt;2&lt;/sub&gt;e&lt;sub&gt;3&lt;/sub&gt;, …, e&lt;sub&gt;k&lt;/sub&gt;v&lt;sub&gt;k&lt;/sub&gt;, where each edge, e&lt;sub&gt;i&lt;/sub&gt; is defined as e&lt;sub&gt;i&lt;/sub&gt; = {v&lt;sub&gt;i-1&lt;/sub&gt;, v&lt;sub&gt;i&lt;/sub&gt;}. This function counts the number of walks of any length between each pair of nodes, by studying the powers of the sociomatrix. 
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2117"/>
        <source>Reachability Matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2120"/>
        <source>Compute the Reachability Matrix of the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2121"/>
        <source>Reachability Matrix

Calculates the reachability matrix X&lt;sup&gt;R&lt;/sup&gt; of the graph where the {i,j} element is 1 if the vertices i and j are reachable. 

Actually, this just checks whether the corresponding element of Distances matrix is not zero.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2129"/>
        <source>Local and Network Clustering Coefficient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2132"/>
        <source>Compute the Watts &amp; Strogatz Clustering Coefficient for every actor and the network average.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2133"/>
        <source>Local and Network Clustering Coefficient

The local Clustering Coefficient  (Watts &amp; Strogatz, 1998) of an actor quantifies how close the actor and her neighbors are to being a clique and can be used as an indication of network transitivity. 
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2140"/>
        <source>Clique Census</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2143"/>
        <source>Compute the clique census: find all maximal connected subgraphs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2144"/>
        <source>Clique Census

Produces the census of network cliques (maximal connected subgraphs), along with disaggregation by actor and co-membership information. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2149"/>
        <source>Triad Census (M-A-N labeling)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2152"/>
        <source>Calculate the triad census for all actors.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2153"/>
        <source>Triad Census

A triad census counts all the different kinds of observed triads within a network and codes them according to their number of mutual, asymmetric and non-existent dyads using the M-A-N labeling scheme. 
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2160"/>
        <source>Pearson correlation coefficients</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2164"/>
        <source>Compute Pearson Correlation Coefficients between pairs of actors. Most useful with valued/weighted ties (non-binary). </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2167"/>
        <source>Pearson correlation coefficients

Computes a correlation matrix, where the elements are the Pearson correlation coefficients between pairs of actors in terms of their tie profiles or distances (in, out or both). 

The Pearson product-moment correlation coefficient (PPMCC or PCC or Pearson&apos;s r)is a measure of the linear dependence/association between two variables X and Y. 

This correlation measure of similarity is particularly useful when ties are valued/weighted denoting strength, cost or probability.

Note that in very sparse networks (very low density), measures such as&quot;exact matches&quot;, &quot;correlation&quot; and &quot;distance&quot; will show little variation among the actors, causing difficulty in classifying the actors in structural equivalence classes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2183"/>
        <source>Similarity by measure (Exact, Jaccard, Hamming, Cosine, Euclidean)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2186"/>
        <source>Compute a pair-wise actor similarity matrix based on a measure of their ties (or distances) &quot;matches&quot; .</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2189"/>
        <source>Actor Similarity by measure

Computes a pair-wise actor similarity matrix, where each element (i,j) is the ratio of tie (or distance) matches of actors i and j to all other actors. 

SocNetV supports the following matching measures: Simple Matching (Exact Matches)Jaccard Index (Positive Matches or Co-citation)Hamming distanceCosine similarityEuclidean distanceFor instance, if you select Exact Matches, a matrix element (i,j) = 0.5, means that actors i and j have the same ties present or absent to other actors 50% of the time. 

These measures of similarity are particularly useful when ties are binary (not valued).

Note that in very sparse networks (very low density), measures such as&quot;exact matches&quot;, &quot;correlation&quot; and &quot;distance&quot; will show little variation among the actors, causing difficulty in classifying the actors in structural equivalence classes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2211"/>
        <source>Tie Profile Dissimilarities/Distances</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2215"/>
        <source>Compute tie profile dissimilarities/distances (Euclidean, Manhattan, Jaccard, Hamming) between all pair of nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2218"/>
        <source>Tie Profile Dissimilarities/Distances

Computes a matrix of tie profile distances/dissimilarities between all pairs of actors/nodes in the social network using an ordinary metric such as Euclidean distance, Manhattan distance, Jaccard distance or Hamming distance).The resulted distance matrix is a n x n matrix, in which the (i,j) element is the distance or dissimilarity between the tie profiles of node i and node j.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2230"/>
        <source>Hierarchical clustering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2234"/>
        <source>Perform agglomerative cluster analysis of the actors in the social network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2236"/>
        <source>Hierarchical clustering

Hierarchical clustering (or hierarchical cluster analysis, HCA) is a method of cluster analysis which builds a hierarchy of clusters, based on their elements dissimilarity. In SNA context these clusters usually consist of network actors. 
This method takes the social network distance matrix as input and uses the Agglomerative &quot;bottom up&quot; approach where each actor starts in its own cluster (Level 0). In each subsequent Level, as we move up the clustering hierarchy, a pair of clusters are merged into a larger cluster, until all actors end up in the same cluster. To decide which clusters should be combined at each level, a measure of dissimilarity between sets of observations is required. This measure consists of a metric for the distance between actors (i.e. manhattan distance) and a linkage criterion (i.e. single-linkage clustering). This linkage criterion (essentially a definition of distance between clusters), differentiates between the different HCA methods.Note that the complexity of agglomerative clustering is O( n^2 log(n) ), therefore is too slow for large data sets.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2262"/>
        <source>Degree Centrality (DC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2265"/>
        <source>Compute Degree Centrality indices for every actor and group Degree Centralization.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2268"/>
        <source>Degree Centrality (DC)

For each node v, the DC index is the number of edges attached to it (in undirected graphs) or the total number of arcs (outLinks) starting from it (in digraphs).
This is often considered a measure of actor activity. 

This index can be calculated in both graphs and digraphs but is usually best suited for undirected graphs. It can also be calculated in weighted graphs. In weighted relations, DC is the sum of weights of all edges/outLinks attached to v.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2280"/>
        <source>Signed Degree Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2282"/>
        <source>Compute Degree Centrality split by tie sign, for signed networks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2284"/>
        <source>&lt;p&gt;&lt;b&gt;Signed Degree Centrality&lt;/b&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;Meaning:&lt;/b&gt; on a signed network, a plain degree count conflates &quot;liked by many&quot; with &quot;disliked by many&quot; into one number - this splits it back apart into four scores per node: &lt;i&gt;pos&lt;/i&gt; (positive ties sent, or their summed strength if weights are considered), &lt;i&gt;neg&lt;/i&gt; (the same for negative ties), &lt;i&gt;ratio&lt;/i&gt; (pos / (pos+neg), the fraction of a node&apos;s ties that are positive), and &lt;i&gt;net&lt;/i&gt; (pos &amp;minus; neg, a single signed balance score).&lt;/p&gt;&lt;p&gt;&lt;b&gt;When to use:&lt;/b&gt; a fast first-pass screen for who&apos;s positively vs. negatively prominent on a signed network - the same role plain Degree Centrality plays on an unsigned one. Cheap, easy to explain, no attention paid to indirect/structural effects.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Weights:&lt;/b&gt; when considered, a tie&apos;s absolute weight is summed into pos or neg according to its sign, so a stronger tie always adds more regardless of which side it falls on.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Compare to:&lt;/b&gt; Degree Centrality (DC), the unsigned equivalent this splits apart. Out-degree only, like DC itself - to compute in-degree, use the Degree Prestige measure.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2303"/>
        <source>PN Centrality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2305"/>
        <source>Compute PN Centrality (Everett &amp; Borgatti 2014) for signed networks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2307"/>
        <source>&lt;p&gt;&lt;b&gt;PN Centrality&lt;/b&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;Meaning:&lt;/b&gt; a purpose-built centrality measure for signed networks. It is worse to receive a negative tie from someone who is highly popular (receives a lot of positive ties) than from someone who is marginalized - conversely, receiving a negative tie from someone who is universally disliked might even be interpreted as a positive indicator. PN captures this by weighting each negative tie by the sender&apos;s own positive standing, propagated through indirect connections the same way Katz Centrality propagates ordinary ties.&lt;/p&gt;&lt;p&gt;&lt;b&gt;When to use:&lt;/b&gt; the standard choice for centrality on a signed network, when re-computing an unsigned measure on tie magnitude alone would throw away the sign information that&apos;s the whole point of the network being signed in the first place.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Weights:&lt;/b&gt; considers tie sign only (positive/negative) - tie strength is never used, even on a weighted network. There is no weights choice, unlike every other centrality measure here.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Compare to:&lt;/b&gt; Katz Centrality (KC) - PN&apos;s undirected-mode formula is the exact same closed-form &quot;geometric series of walks&quot; identity Katz uses, just built from the signed tie-sign matrix with a fixed attenuation factor instead of a user-tunable alpha. Signed Degree Centrality (a simpler, direct-ties-only measure) is the natural first step before this one.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2329"/>
        <source>Closeness Centrality (CC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2333"/>
        <source>Compute Closeness Centrality indices for every actor and group Closeness Centralization.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2337"/>
        <source>Closeness Centrality (CC)

For each node v, CC the inverse sum of the shortest distances between v and every other node. CC is interpreted as the ability to access information through the &quot;grapevine&quot; of network members. Nodes with high closeness centrality are those who can reach many other nodes in few steps. 

This index can be calculated in both graphs and digraphs. It can also be calculated in weighted graphs although the weight of each edge (v,u) in E is always considered to be 1. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2348"/>
        <source>Influence Range Closeness Centrality (IRCC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2352"/>
        <source>Compute Influence Range Closeness Centrality indices for every actor focusing on how proximate each one isto others in its influence range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2357"/>
        <source>Influence Range Closeness Centrality (IRCC)

For each node v, IRCC is the standardized inverse average distance between v and every reachable node.
This improved CC index is optimized for graphs and directed graphs which are not strongly connected. Unlike the ordinary CC, which is the inverted sum of distances from node v to all others (thus undefined if a node is isolated or the digraph is not strongly connected), IRCC considers only distances from node v to nodes in its influence range J (nodes reachable from v). The IRCC formula used is the ratio of the fraction of nodes reachable by v (|J|/(n-1)) to the average distance of these nodes from v (sum(d(v,j))/|J|</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2369"/>
        <source>Betweenness Centrality (BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2371"/>
        <source>Betweenness Centrality (BC)

For each node v, BC is the ratio of all geodesics between pairs of nodes which run through v. It reflects how often an node lies on the geodesics between the other nodes of the network. It can be interpreted as a measure of control. A node which lies between many others is assumed to have a higher likelihood of being able to control information flow in the network. 

Note that betweenness centrality assumes that all geodesics have equal weight or are equally likely to be chosen for the flow of information between any two nodes. This is reasonable only on &quot;regular&quot; networks where all nodes have similar degrees. On networks with significant degree variance you might want to try informational centrality instead. 

This index can be calculated in both graphs and digraphs but is usually best suited for undirected graphs. It can also be calculated in weighted graphs although the weight of each edge (v,u) in E is always considered to be 1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2384"/>
        <source>Compute Betweenness Centrality indices and group Betweenness Centralization.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2387"/>
        <source>Stress Centrality (SC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2389"/>
        <source>Compute Stress Centrality indices for every actor and group Stress Centralization.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2390"/>
        <source>Stress Centrality (SC)

For each node v, SC is the total number of geodesics between all other nodes which run through v. A node with high SC is considered &apos;stressed&apos;, since it is traversed by a high number of geodesics. When one node falls on all other geodesics between all the remaining (N-1) nodes, then we have a star graph with maximum Stress Centrality. 

This index can be calculated in both graphs and digraphs but is usually best suited for undirected graphs. It can also be calculated in weighted graphs although the weight of each edge (v,u) in E is always considered to be 1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2399"/>
        <source>Eccentricity Centrality (EC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2401"/>
        <source>Compute Eccentricity Centrality (aka Harary Graph Centrality) scores for each node.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2403"/>
        <source>Eccentricity Centrality (EC)

 This index is also known as Harary Graph Centrality. For each node i, the EC is the inverse of the maximum geodesic distance of that v to all other nodes in the network. 
Nodes with high EC have short distances to all other nodes This index can be calculated in both graphs and digraphs but is usually best suited for undirected graphs. It can also be calculated in weighted graphs although the weight of each edge (v,u) in E is always considered to be 1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2414"/>
        <source>Gil and Schmidt Power Centrality (PC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2416"/>
        <source>Compute Power Centrality indices (aka Gil-Schmidt Power Centrality) for every actor and group Power Centralization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2417"/>
        <source>Power Centrality (PC)

 For each node v, this index sums its degree (with weight 1), with the size of the 2nd-order neighbourhood (with weight 2), and in general, with the size of the kth order neighbourhood (with weight k). Thus, for each node in the network the most important other nodes are its immediate neighbours and then in decreasing importance the nodes of the 2nd-order neighbourhood, 3rd-order neighbourhood etc. For each node, the sum obtained is normalised by the total numbers of nodes in the same component minus 1. Power centrality has been devised by Gil-Schmidt. 

This index can be calculated in both graphs and digraphs but is usually best suited for undirected graphs. It can also be calculated in weighted graphs although the weight of each edge (v,u) in E is always considered to be 1 (therefore not considered).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2421"/>
        <source>Information Centrality (IC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2424"/>
        <source>Compute Information Centrality indices and group Information Centralization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2426"/>
        <source>Information Centrality (IC)

Information centrality counts all paths between nodes weighted by strength of tie and distance. This centrality  measure developed by Stephenson and Zelen (1989) focuses on how information might flow through many different paths. 

This index should be calculated only for  graphs. 

Note: To compute this index, SocNetV drops all isolated nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2435"/>
        <source>Eigenvector Centrality (EVC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2438"/>
        <source>Compute Eigenvector Centrality indices and group Eigenvector Centralization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2440"/>
        <source>Eigenvector Centrality (EVC)

Computes the Eigenvector centrality of each node in a social network which is defined as the ith element of the leading eigenvector of the adjacency matrix. The leading eigenvector is the eigenvector corresponding to the largest positive eigenvalue.The Eigenvector Centrality, proposed by Bonacich (1989), is an extension of the simpler Degree Centrality because it gives each actor a score proportional to the scores of its neighbors. Thus, a node may be important, in terms of its EC, because it has lots of ties or it has fewer ties to important other nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2452"/>
        <source>Katz Centrality (KC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2454"/>
        <source>Compute Katz Centrality indices</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2456"/>
        <source>Katz Centrality (KC)

Computes the Katz centrality of each node: credit for indirect connections, not just direct ones, discounted the further away they are by an attenuation factor alpha that you choose. Proposed by Katz (1953), it generalizes Degree Centrality by counting walks of every length, not just length 1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2464"/>
        <source>Bonacich Power Centrality (BPC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2466"/>
        <source>Compute Bonacich Power Centrality indices</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2468"/>
        <source>Bonacich Power Centrality (BPC)

Like Katz Centrality, computes credit for indirect connections discounted the further away they are - but with a second parameter beta that you choose, which can be negative. With negative beta, being tied to well-connected others can hurt rather than help a node&apos;s score, and scores can come out negative - unlike every other measure in this app. Not to be confused with the existing Power Centrality (PC).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2478"/>
        <source>Degree Prestige (DP)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2479"/>
        <source>Compute Degree Prestige (InDegree) indices </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2481"/>
        <source>InDegree (Degree Prestige)

For each node k, this the number of arcs ending at k. Nodes with higher in-degree are considered more prominent among others. In directed graphs, this index measures the prestige of each node/actor. Thus it is called Degree Prestige. Nodes who are prestigious tend to receive many nominations or choices (in-links). The largest the index is, the more prestigious is the node. 

This index can be calculated only for digraphs. In weighted relations, DP is the sum of weights of all arcs/inLinks ending at node v.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2492"/>
        <source>PageRank Prestige (PRP)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2495"/>
        <source>Compute PageRank Prestige indices for every actor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2496"/>
        <source>PageRank Prestige

An importance ranking for each node based on the link structure of the network. PageRank, developed by Page and Brin (1997), focuses on how nodes are connected to each other, treating each edge from a node as a citation/backlink/vote to another. In essence, for each node PageRank counts all backlinks to it, but it does so by not counting all edges equally while it normalizes each edge from a node by the total number of edges from it. PageRank is calculated iteratively and it corresponds to the principal eigenvector of the normalized link matrix. 

This index can be calculated in both graphs and digraphs but is usually best suited for directed graphs since it is a prestige measure. It can also be calculated in weighted graphs. In weighted relations, each backlink to a node v from another node u is considered to have weight=1 but it is normalized by the sum of outLinks weights (outDegree) of u. Therefore, nodes with high outLink weights give smaller percentage of their PR to node v.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2514"/>
        <source>Proximity Prestige (PP)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2517"/>
        <source>Calculate and display Proximity Prestige (digraphs only)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2520"/>
        <source>Proximity Prestige (PP) 

This index measures how proximate a node v is to the nodes in its influence domain I (the influence domain I of a node is the number of other nodes that can reach it).

In PP calculation, proximity is based on distances to rather than distances from node v. 
To put it simply, in PP what matters is how close are all the other nodes to node v. 

The algorithm takes the average distance to node v of all nodes in its influence domain, standardizes it by multiplying with (N-1)/I and takes its reciprocal. In essence, the formula SocNetV uses to calculate PP is the ratio of the fraction of nodes that can reach node v, to the average distance of that nodes to v: 
PP = (I/(N-1))/(sum{d(u,v)}/I) 
where the sum is over all nodes in I.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2541"/>
        <source>Display Node Numbers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2543"/>
        <source>Toggle displaying of node numbers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2545"/>
        <source>Display Node Numbers

Enables or disables displaying of node numbers.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2553"/>
        <source>Display Numbers Inside Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2555"/>
        <source>Toggle displaying of numbers inside nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2557"/>
        <source>Display Numbers Inside Nodes

Enables or disables displaying node numbers inside nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2565"/>
        <source>Display Node Labels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2567"/>
        <source>Toggle displaying of node labels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2569"/>
        <source>Display Node Labels

Enables or disables node labels.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2577"/>
        <source>Display Edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2578"/>
        <source>Toggle displaying edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2580"/>
        <source>Display Edges

Enables or disables displaying of edges.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2588"/>
        <source>Display Edge Weights</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2590"/>
        <source>Toggle displaying of numbers of edge weights</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2592"/>
        <source>Display Edge Weights

Enables or disables displaying edge weight numbers.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2598"/>
        <source>Consider Edge Weights in Calculations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2600"/>
        <source>Toggle considering edge weights during calculations (i.e. distances, centrality, etc) (this session only)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2603"/>
        <source>Consider Edge Weights in Calculations

Enables or disables considering edge weights during calculations (i.e. distances, centrality, etc).
This setting will apply to this session only. 
To permanently change it, go to Settings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2613"/>
        <source>Display Edge Labels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2615"/>
        <source>Toggle displaying of edge labels, if any</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2617"/>
        <source>Display Edge Labels

Enables or disables displaying edge labels.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2625"/>
        <source>Display Edge Arrows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2627"/>
        <source>Toggle displaying directional arrows on edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2629"/>
        <source>Display Edge Arrows

Enables or disables displaying of arrows on edges.

Useful if all links are reciprocal (undirected graph).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2638"/>
        <source>Edge Thickness reflects Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2639"/>
        <source>Draw edges as thick as their weights (if specified)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2641"/>
        <source>Edge thickness reflects weight

Click to toggle having all edges as thick as their weight (if specified)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2650"/>
        <source>Bezier Curves</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2651"/>
        <source>Draw Edges as Bezier curves</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2653"/>
        <source>Edges Bezier

Enables or disables drawing edges as Bezier curves.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2661"/>
        <source>Change Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2662"/>
        <source>Change the canvasbackground color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2663"/>
        <source>Background Color

Changes the background color of the canvas</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2668"/>
        <source>Background Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2670"/>
        <source>Select and display a custom image in the canvas background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2672"/>
        <source>Background Image

Enable to select an image file from your computer, which will be displayed in the background instead of plain color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2680"/>
        <source>Full screen (this session)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2683"/>
        <source>Toggle full screen mode (for this session only)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2685"/>
        <source>Full Screen Mode

Enable to show application window in full screen mode. This setting will apply to this session only. 
To permanently change it, go to Settings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2694"/>
        <source>Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2698"/>
        <source>Open the Settings dialog where you can save your preferences for all future sessions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2701"/>
        <source>Open the Settings dialog to save your preferences for all future sessions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2704"/>
        <source>Settings

Opens the Settings dialog where you can edit and save settings permanently for all subsequent sessions.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2710"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1135"/>
        <source>Data Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2714"/>
        <source>Show/hide the node and edge data table panel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2715"/>
        <source>Toggle the node/edge data table panel (Ctrl+D)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2722"/>
        <source>Manual</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2724"/>
        <source>Read the manual...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2725"/>
        <source>Manual

Displays the documentation of SocNetV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2728"/>
        <source>Tip of the Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2729"/>
        <source>Read useful tips</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2730"/>
        <source>Quick Tips

Displays some useful and quick tips</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2734"/>
        <source>Check for Updates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2735"/>
        <source>Open a browser to SocNetV website to check for a new version...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2737"/>
        <source>Check Updates

Open a browser to SocNetV website so that you can check yourself for updates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2743"/>
        <source>System Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2745"/>
        <source>Show information about your system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2747"/>
        <source>&lt;p&gt;&lt;b&gt;System Information&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Shows useful information about your system, which you can include in your bug reports. &lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2755"/>
        <source>About

Basic information about SocNetV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2758"/>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2759"/>
        <source>About Qt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_actions.cpp" line="2760"/>
        <source>About

About Qt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_app.cpp" line="110"/>
        <source>&lt;p&gt;&lt;b&gt;The canvas of SocNetV&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Inside this area you create and edit networks, load networks from files and visualize them according to the selected metrics. &lt;/p&gt;&lt;p&gt;To create a new node, &lt;em&gt;double-click&lt;/em&gt; anywhere.&lt;/p&gt;&lt;p&gt;To add an edge between two nodes, &lt;em&gt;double-click&lt;/em&gt; on the first node (source) then double-click on the second (target) .&lt;/p&gt;&lt;p&gt;To move around the canvas, use the keyboard arrows.&lt;/p&gt;&lt;p&gt;To change network appearance, &lt;em&gt;right click on empty space&lt;/em&gt;. &lt;/p&gt;&lt;p&gt;To edit the properties of a node, &lt;em&gt;right-click&lt;/em&gt; on it. &lt;/p&gt;&lt;p&gt;To edit the properties of an edge, &lt;em&gt;right-click&lt;/em&gt; on it.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_app.cpp" line="244"/>
        <source>Node %1 selected from data table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_app.cpp" line="248"/>
        <source>Edge %1→%2 selected from data table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_app.cpp" line="462"/>
        <source>Removing filter...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_app.cpp" line="486"/>
        <source>Clearing all filters...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_app.cpp" line="529"/>
        <source>Application initialization. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_app.cpp" line="605"/>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="927"/>
        <source>BackgroundImage on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="36"/>
        <source>&amp;Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="40"/>
        <source>Recent &amp;files...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="51"/>
        <source>&amp;Import ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="73"/>
        <source>Create &amp;Random Network...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="96"/>
        <source>Export to other...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="119"/>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="140"/>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="439"/>
        <source>Nodes...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="177"/>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="447"/>
        <source>Edges...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="203"/>
        <source>Filter...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="224"/>
        <source>Subgraphs...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="235"/>
        <source>&amp;Analyze</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="236"/>
        <source>Adjacency Matrix and Matrices...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="253"/>
        <source>Cohesion...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="283"/>
        <source>Centrality and Prestige indices...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="308"/>
        <source>Communities and Subgroups...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="317"/>
        <source>Structural Equivalence...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="328"/>
        <source>&amp;Layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="334"/>
        <source>Random...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="341"/>
        <source>Radial by prominence index...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="361"/>
        <source>On Levels by prominence index...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="381"/>
        <source>Node Size by prominence index...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="401"/>
        <source>Node Color by prominence index...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="425"/>
        <source>Force-Directed Placement...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="438"/>
        <source>&amp;Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="463"/>
        <source>&amp;Canvas...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="477"/>
        <source>&amp;Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="523"/>
        <source>&lt;p&gt;&lt;b&gt;Current relation&lt;b&gt;&lt;/p&gt;&lt;p&gt;To rename the current relation, click here, enter new name and press Enter.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="526"/>
        <source>Name of the current relation. To rename it, enter a new name and press Enter. To select another relation, click the Down arrow (on the right).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_menu.cpp" line="529"/>
        <source>&lt;p&gt;&lt;b&gt;Relations combo&lt;/b&gt;&lt;/p&gt;&lt;p&gt;This displays the currently selected relation of the network. &lt;/p&gt;&lt;p&gt;To rename the current relation, click on the name, enter a new name and press Enter. &lt;/p&gt;&lt;p&gt;To select another relation (if any), click the Down arrow (on the right).&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="43"/>
        <source>Auto Create:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="46"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="49"/>
        <source>Create a network automatically (famous, random, or by using the web crawler).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="50"/>
        <source>&lt;p&gt;&lt;b&gt;Auto network creation&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Create a new network automatically.&lt;/p&gt;&lt;p&gt;You may create a random network, recreate famous data-sets or use the built-in web crawler to create a network of webpages. &lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="74"/>
        <source>Subgraph:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="77"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="80"/>
        <source>Create a basic subgraph with selected nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="81"/>
        <source>&lt;p&gt;&lt;b&gt;Subgraph creation&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Create a basic subgraph from selected nodes.&lt;/p&gt;&lt;p&gt;Select some nodes with your mouse and then click on one of theseoptions to create a basic subgraph with them. &lt;/p&gt;&lt;p&gt;You can create a star, clique, line, etc subgraph.&lt;/p&gt;&lt;p&gt;There must be some nodes selected!&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="102"/>
        <source>Edge Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="106"/>
        <source>Select the edge mode: directed or undirected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="107"/>
        <source>&lt;p&gt;&lt;b&gt;Edge mode&lt;/b&gt;&lt;/p&gt;&lt;p&gt;In social networks and graphs, edges can be directed or undirected (and the corresponding network is called directed or undirected as well).&lt;/p&gt;&lt;p&gt;This option lets you choose what the kind of edges you want in your network.&lt;p&gt;&lt;p&gt;By selecting an option here, all edges of the network will change automatically. &lt;p&gt;&lt;p&gt;For instance, if the network is directed and and you select &quot;undirected&quot; then all the directed edges will become undirected &lt;p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="123"/>
        <source>Transform:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="127"/>
        <source>Select a method to transform the network, i.e. transform all directed edges to undirected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="128"/>
        <source>&lt;p&gt;&lt;b&gt;Transform Network Edges &lt;/b&gt;&lt;/p&gt;&lt;p&gt;Select a method to transform network edges. Available methods: &lt;/p&gt;&lt;p&gt;&lt;em&gt;Symmetrize All Edges&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Forces all edges in this relation to be reciprocated: &lt;p&gt;If there is a directed edge from node A to node B then a new directed edge from node B to node A will be  created, with the same weight. &lt;/p&gt;&lt;p&gt;The result is a symmetric network.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Symmetrize Edges by Strong Ties:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Creates a new symmetric relation by keeping strong ties only. &lt;/p&gt;&lt;p&gt;A tie between actors A and B is considered strong if both A -&gt; B and B -&gt; A exist. Therefore, in the new relation, a reciprocated edge will be created between actors A and B only if both arcs A-&gt;B and B-&gt;A were present in the current or all relations. &lt;/p&gt;&lt;p&gt;If the network is multi-relational, it will ask you whether ties in the current relation or all relations are to be considered.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Symmetrize Edges by examining Cocitation:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Creates a new symmetric relation by connecting actors that are cocitated by others. In the new relation, an edge will be created between actor i and actor j only if C(i,j) &gt; 0, where C the Cocitation Matrix. &lt;/p&gt;&lt;p&gt;Thus the actor pairs cited by more common neighbors will appear with a stronger tie between them than pairs those cited by fewer common neighbors. The resulting relation is symmetric.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Dichotomize Edges&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Creates a new binary relation in a valued network using edge dichotomization according to a given threshold value. In the new dichotomized relation, an edge will exist between actor i and actor j only if e(i,j) &gt; threshold, where threshold is a user-defined value.The process is also known as compression and slicing.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="188"/>
        <source>Filter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="192"/>
        <source>Select a filter to apply to nodes or edges. Filters are non-destructive and reversible.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="194"/>
        <source>&lt;p&gt;&lt;b&gt;Filter Nodes / Edges&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Apply a non-destructive, reversible filter to the network. Available options:&lt;/p&gt;&lt;p&gt;&lt;em&gt;Filter by Centrality&lt;/em&gt; — hide nodes below a centrality score threshold.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Filter by Attribute&lt;/em&gt; — hide nodes or edges whose attribute does not match a condition.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Filter Edges by Weight&lt;/em&gt; — hide edges below a weight threshold.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Restore All Nodes&lt;/em&gt; — undo the last node filter.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Restore All Edges&lt;/em&gt; — undo the last edge filter.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="220"/>
        <source>Network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="227"/>
        <source>Matrix:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="231"/>
        <source>Select which matrix to compute and display, based on the adjacency matrix of the current network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="233"/>
        <source>&lt;p&gt;&lt;b&gt;Matrix Analysis&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Compute and display the adjacency matrix and other matrices based on the adjacency matrix of the current network. Available options:&lt;p&gt;&lt;em&gt;Adjacency Matrix&lt;/em&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Adjacency Matrix Plot&lt;/em&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Inverse of Adjacency Matrix&lt;/em&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Transpose of Adjacency Matrix&lt;/em&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Cocitation Matrix &lt;/em&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Degree Matrix &lt;/em&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Laplacian Matrix &lt;/em&gt;&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="259"/>
        <source>Cohesion:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="263"/>
        <source>Select a graph-theoretic measure, i.e. distances, walks, graph diameter, eccentricity.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="265"/>
        <source>&lt;p&gt;&lt;b&gt;Analyze Cohesion&lt;/b&gt;&lt;/p&gt;&lt;p&gt;&lt;Compute basic graph-theoretic measures. &lt;p&gt;&lt;em&gt;Reciprocity:&lt;/em&gt;&lt;p&gt;&lt;p&gt;Measures the likelihood that pairs of nodes in a directed network are mutually linked.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Symmetry:&lt;/em&gt;&lt;p&gt;&lt;p&gt;Checks if the directed network is symmetric or not.&lt;p&gt;&lt;p&gt;&lt;em&gt;Distances:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Computes the matrix of geodesic distances between all pairs of nodes.&lt;p&gt;&lt;p&gt;&lt;em&gt;Average Distance:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Computes the average distance between all nodes.&lt;p&gt;&lt;p&gt;&lt;em&gt;Graph Diameter:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The maximum distance between any two nodes in the network.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Walks:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;A walk is a sequence of edges and vertices (nodes), where each edge&apos;s endpoints are the two vertices adjacent to it. In a walk, vertices and edges may repeat.&lt;p&gt;&lt;em&gt;Eccentricity:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The Eccentricity of each node is how far, at most, is from every other actor in the network.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Connectedness:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Checks whether the network is connected, i.e. whether a path exists between every pair of nodes. For directed networks, asks whether to check weak connectivity (ignoring edge direction) or strong connectivity (respecting it).&lt;/p&gt;&lt;p&gt;&lt;em&gt;Node Connectivity:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The minimum number of nodes that must be removed to disconnect two chosen actors. For directed networks, asks whether to respect edge direction (strong) or ignore it (weak).&lt;/p&gt;&lt;p&gt;&lt;em&gt;Graph Connectivity:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The network&apos;s overall vertex connectivity: the fewest nodes that would need to be removed to disconnect it at its weakest point. Same weak/strong choice as Node Connectivity for directed networks.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Reachability:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Creates a matrix where an element (i,j) = 1 only if the actors i and j are reachable.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Clustering Coefficient (CLC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The CLC score of each node  is the proportion of actual links between its neighbors divided by the number of links that could possibly exist between them. Quantifies how close each actor and its neighbors are to form a complete subgraph (clique)&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="340"/>
        <source>Prominence:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="344"/>
        <source>Select a prominence metric to compute for each actor and the whole network. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="346"/>
        <source>&lt;p&gt;&lt;b&gt;Prominence Analysis&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Compute Centrality and Prestige indices, to measure how &lt;em&gt;prominent&lt;/em&gt; (important) each actor (node) is inside the network. &lt;/p&gt;&lt;p&gt;Centrality measures quantify how central is each node by examining its ties and its geodesic distances (shortest path lengths) to other nodes. Most Centrality indices were designed for undirected graphs. &lt;/p&gt;&lt;p&gt;Prestige indices focus on &quot;choices received&quot; to a node. These indices measure the nominations or ties to each node from all others (or inLinks). Prestige indices are suitable (and can be calculated only) on directed graphs.&lt;/p&gt;&lt;p&gt;Available measures:&lt;/p&gt;&lt;p&gt;&lt;em&gt;Degree Centrality (DC) &lt;/em&gt;&lt;/p&gt;&lt;p&gt;The sum of outbound edges or the sum of weights of outbound edges from each node &lt;em&gt;i&lt;/em&gt; to all adjacent nodes. Note: This is the outDegree Centrality. To compute inDegree Centrality, use the Degree Prestige measure.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Closeness Centrality (CC):&lt;/em&gt;&lt;/p&gt;The inverted sum of geodesic distances from each node &lt;em&gt;u&lt;/em&gt; to all other nodes. &lt;p&gt;&lt;em&gt;IR Closeness Centrality (IRCC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The ratio of the fraction of nodes reachable by each node &lt;em&gt;u&lt;/em&gt; to the average distance of these nodes from &lt;em&gt;u&lt;/em&gt;.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Betweenness Centrality (BC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The sum of delta&lt;sub&gt;(s,t,u)&lt;/sub&gt; for all s,t ∈ V where delta&lt;sub&gt;(s,t,u)&lt;/sub&gt; is the ratio of all geodesics between nodes &lt;em&gt;s&lt;/em&gt; and &lt;em&gt;t&lt;/em&gt; which run through node &lt;em&gt;u&lt;/em&gt;.&lt;/p&gt; &lt;p&gt;&lt;em&gt;Stress Centrality (SC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The sum of sigma&lt;sub&gt;(s,t,u)&lt;/sub&gt; for all s,t ∈ V where sigma&lt;sub&gt;(s,t,u)&lt;/sub&gt; is the number of geodesics between nodes &lt;em&gt;s&lt;/em&gt; and &lt;em&gt;t&lt;/em&gt; which run through node &lt;em&gt;u&lt;/em&gt;.&lt;/p&gt; &lt;p&gt;&lt;em&gt;Eccentricity Centrality (EC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Also known as Harary Graph Centrality. The inverse maximum geodesic distance from node &lt;em&gt;u&lt;/em&gt; to all other nodes in the network.&lt;p&gt;&lt;em&gt;Power Centrality (PC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The sum of the sizes of all N&lt;sub&gt;th&lt;/sub&gt;-order neighbourhoods of node &lt;em&gt;u&lt;/em&gt; with weight 1/n.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Information Centrality (IC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Measures the information flow through all paths between actors weighted by strength of tie and distance.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Eigenvector Centrality (EVC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The EVC score of each node &lt;em&gt;i&lt;/em&gt; is the i&lt;sub&gt;th&lt;/sub&gt; element of the leading eigenvector of the adjacency matrix, that is the eigenvector corresponding to the largest positive eigenvalue. &lt;p&gt;&lt;em&gt;Degree Prestige (DP):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Also known as InDegree Centrality, it is the sum of inbound edges to a node &lt;em&gt;u&lt;/em&gt; from all adjacent nodes. &lt;/p&gt;&lt;p&gt;&lt;em&gt;PageRank Prestige (PRP):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;For each node &lt;em&gt;u&lt;/em&gt; counts all inbound links (edges) to it, but it normalizes each inbound link from another node &lt;em&gt;v&lt;/em&gt; by the outDegree of &lt;em&gt;v&lt;/em&gt;. &lt;/p&gt;&lt;p&gt;&lt;em&gt;Proximity Prestige (PP):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The ratio of the proportion of nodes who can reach each node &lt;em&gt;u&lt;/em&gt; to the average distance these nodes are from it. Similar to Closeness Centrality but it counts only inbound distances to each actor, thus it is a measure of actor prestige.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Signed Degree Centrality:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;For signed networks: out-degree split by tie sign into four scores per node &lt;em&gt;u&lt;/em&gt; - pos (positive ties sent), neg (negative ties sent), ratio (pos / (pos+neg)), and net (pos &amp;minus; neg). No single standardized score, unlike the other measures above.&lt;/p&gt;&lt;p&gt;&lt;em&gt;PN Centrality:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;For signed networks: a negative tie from someone who is themselves highly (positively) prominent hurts more than one from someone marginalized, propagated through indirect connections. Considers tie sign only, never tie strength. No single standardized score.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="473"/>
        <source>Communities:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="477"/>
        <source>Select a community detection measure / cohesive subgroup algorithm, i.e. cliques, triad census etc.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="478"/>
        <source>&lt;p&gt;&lt;b&gt;Community Analysis&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Community detection measures and cohesive subgroup algorithms, to identify meaningful subgraphs in the graph.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Available measures&lt;/b&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Clique Census:&lt;/em&gt;&lt;p&gt;&lt;p&gt;Computes aggregate counts of all maximal cliques of actors by size,  actor by clique analysis, clique co-memberships&lt;/p&gt;&lt;p&gt;&lt;em&gt;Triad Census:&lt;/em&gt;&lt;p&gt;&lt;p&gt;Computes the Holland, Leinhardt and Davis triad census, which counts all different classes of triads coded according to theirnumber of Mutual, Asymmetric and Non-existest dyads (M-A-N scheme)&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="499"/>
        <source>Equivalence:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="503"/>
        <source>Select a method to measure structural equivalence, i.e. Pearson Coefficients, tie profile similarities, hierarchical clustering, etc.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="506"/>
        <source>&lt;p&gt;&lt;b&gt;Structural Equivalence Analysis&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Select one of the available structural equivalence measures and visualization algorithms. &lt;p&gt;&lt;p&gt;Available options&lt;/p&gt;&lt;p&gt;&lt;em&gt;Pearson Coefficients&lt;.em&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Tie profile similarities&lt;/em&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Dissimilarities&lt;/em&gt;&lt;/p&gt;&lt;p&gt;&lt;em&gt;Hierarchical Clustering Analysis&lt;/em&gt;&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="542"/>
        <source>Analyze</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="549"/>
        <source>Index:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="552"/>
        <source>Select a prominence-based layout model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="553"/>
        <source>&lt;p&gt;&lt;b&gt;Visualize by prominence index&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Apply a prominence-based layout model to the network.&lt;/p&gt;&lt;p&gt;For instance, you can apply a degree centrality layout. &lt;/p&gt;&lt;p&gt;Note: For each prominence index, you must select a layout type (below).&lt;/p&gt;&lt;p&gt;Available measures:&lt;/p&gt;&lt;p&gt;&lt;em&gt;Degree Centrality (DC) &lt;/em&gt;&lt;/p&gt;&lt;p&gt;The sum of outbound edges or the sum of weights of outbound edges from each node &lt;em&gt;i&lt;/em&gt; to all adjacent nodes. Note: This is the outDegree Centrality. To compute inDegree Centrality, use the Degree Prestige measure.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Closeness Centrality (CC):&lt;/em&gt;&lt;/p&gt;The inverted sum of geodesic distances from each node &lt;em&gt;u&lt;/em&gt; to all other nodes. &lt;p&gt;&lt;em&gt;IR Closeness Centrality (IRCC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The ratio of the fraction of nodes reachable by each node &lt;em&gt;u&lt;/em&gt; to the average distance of these nodes from &lt;em&gt;u&lt;/em&gt;.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Betweenness Centrality (BC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The sum of delta&lt;sub&gt;(s,t,u)&lt;/sub&gt; for all s,t ∈ V where delta&lt;sub&gt;(s,t,u)&lt;/sub&gt; is the ratio of all geodesics between nodes &lt;em&gt;s&lt;/em&gt; and &lt;em&gt;t&lt;/em&gt; which run through node &lt;em&gt;u&lt;/em&gt;.&lt;/p&gt; &lt;p&gt;&lt;em&gt;Stress Centrality (SC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The sum of sigma&lt;sub&gt;(s,t,u)&lt;/sub&gt; for all s,t ∈ V where sigma&lt;sub&gt;(s,t,u)&lt;/sub&gt; is the number of geodesics between nodes &lt;em&gt;s&lt;/em&gt; and &lt;em&gt;t&lt;/em&gt; which run through node &lt;em&gt;u&lt;/em&gt;.&lt;/p&gt; &lt;p&gt;&lt;em&gt;Eccentricity Centrality (EC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Also known as Harary Graph Centrality. The inverse maximum geodesic distance from node &lt;em&gt;u&lt;/em&gt; to all other nodes in the network.&lt;p&gt;&lt;em&gt;Power Centrality (PC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The sum of the sizes of all N&lt;sub&gt;th&lt;/sub&gt;-order neighbourhoods of node &lt;em&gt;u&lt;/em&gt; with weight 1/n.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Information Centrality (IC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Measures the information flow through all paths between actors weighted by strength of tie and distance.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Eigenvector Centrality (EVC):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The EVC score of each node &lt;em&gt;i&lt;/em&gt; is the i&lt;sub&gt;th&lt;/sub&gt; element of the leading eigenvector of the adjacency matrix, that is the eigenvector corresponding to the largest positive eigenvalue. &lt;p&gt;&lt;em&gt;Degree Prestige (DP):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Also known as InDegree Centrality, it is the sum of inbound edges to a node &lt;em&gt;u&lt;/em&gt; from all adjacent nodes. &lt;/p&gt;&lt;p&gt;&lt;em&gt;PageRank Prestige (PRP):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;For each node &lt;em&gt;u&lt;/em&gt; counts all inbound links (edges) to it, but it normalizes each inbound link from another node &lt;em&gt;v&lt;/em&gt; by the outDegree of &lt;em&gt;v&lt;/em&gt;. &lt;/p&gt;&lt;p&gt;&lt;em&gt;Proximity Prestige (PP):&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The ratio of the proportion of nodes who can reach each node &lt;em&gt;u&lt;/em&gt; to the average distance these nodes are from it. Similar to Closeness Centrality but it counts only inbound distances to each actor, thus it is a measure of actor prestige.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="629"/>
        <source>Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="633"/>
        <source>Select layout type for the selected model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="634"/>
        <source>&lt;p&gt;&lt;b&gt;Layout Type&lt;/b&gt;&lt;/p&gt;&lt;/p&gt;Select a layout type (radial, level, node size or node color) for the selected prominence-based model you want to apply to the network. Please note that node coloring works only for basic shapes (box, circle, etc) not for image icons.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="656"/>
        <source>By Prominence Index</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="658"/>
        <source>&lt;p&gt;&lt;b&gt;Visualize by prominence index&lt;/b/&gt;&lt;/p&gt;&lt;p&gt;Apply a prominence-based layout model to the network. &lt;/p&gt;&lt;p&gt;For instance, you can apply a Degree Centrality layout. &lt;/p&gt;&lt;p&gt;For each prominence index, you must select a layout type:&lt;/p&gt;&lt;p&gt;Radial, Levels, NodeSize or NodeColor.&lt;/p&gt;&lt;p&gt;Please note that node coloring works only for basic shapes (box, circle, etc) not for image icons.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="671"/>
        <source>Model:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="675"/>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="678"/>
        <source>Eades Spring Embedder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="683"/>
        <source>Select a Force-Directed layout model. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="684"/>
        <source>&lt;p&gt;&lt;b&gt;Visualize by a Force-Directed Placement layout model.&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Available models: &lt;/p&gt;&lt;p&gt;&lt;em&gt;Kamada-Kawai&lt;/em&gt;&lt;/p&gt;&lt;p&gt;The best variant of the Spring Embedder family of models. &lt;p&gt;In this the graph is considered to be a dynamic system where every edge is between two actors is a &apos;spring&apos; of a desirable length, which corresponds to their graph theoretic distance. &lt;/p&gt;&lt;p&gt;In this way, the optimal layout of the graph 
is the state with the minimum imbalance. The degree of imbalance is formulated as the total spring energy: the square summation of the differences between desirable distances and real ones for all pairs of vertices.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Fruchterman-Reingold:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;In this model, the vertices behave as atomic particles or celestial bodies, exerting attractive and repulsive forces to each other. Again, only vertices that are neighbours  attract each other but, unlike Eades Spring Embedder, all vertices repel each other.&lt;/p&gt;&lt;p&gt;&lt;em&gt;Eades Spring Embedder:&lt;/em&gt;&lt;/p&gt;&lt;p&gt;A spring-gravitational model, where each node is regarded as physical object (ring) repelling all other non-adjacent nodes, while springs between connected nodes attract them.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="722"/>
        <source>By Force-Directed Model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="734"/>
        <source>Layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="747"/>
        <source>Control Panel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="759"/>
        <source>▾ </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="767"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="973"/>
        <source>NETWORK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="771"/>
        <source>The type of the network: directed or undirected. Toggle the menu option Edit-&gt;Edges-&gt;Undirected Edges to change it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="774"/>
        <source>The loaded network, if any, is directed and 
any link you add between nodes will be a directed arc.
If you want to work with undirected edges and/or 
transform the loaded network (if any) to undirected 
toggle the option Edit-&gt;Edges-&gt;Undirected 
or press CTRL+E+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="783"/>
        <source>Directed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="785"/>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1072"/>
        <source>Directed data mode. Toggle the menu option Edit-&gt;Edges-&gt;Undirected Edges to change it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="788"/>
        <source>The loaded network, if any, is directed and 
any link you add between nodes will be a directed arc.
If you want to work with undirected edges and/or 
transform the loaded network (if any) to undirected 
toggle the option Edit-&gt;Edges-&gt;Undirected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="794"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="839"/>
        <source>Nodes:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="795"/>
        <source>Each actor in a social network is visualized as a node (aka vertex).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="796"/>
        <source>&lt;p&gt;&lt;b&gt;Nodes&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Total number of actors (nodes/vertices) in this social network.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="801"/>
        <source>The total number of actors (aka nodes or vertices) in the social network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="803"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="846"/>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1092"/>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1094"/>
        <source>Arcs:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="804"/>
        <source>Each link between a pair of actors is visualized as an edge or arc.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="805"/>
        <source>&lt;p&gt;&lt;b&gt;Edges&lt;/b&gt;&lt;/p&gt;Each link between actors is visualized as an undirected edge or a directed arc.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="810"/>
        <source>The total number of directed edges in the social network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="812"/>
        <source>Density:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="813"/>
        <source>&lt;p&gt;&lt;b&gt;Density&lt;/b&gt;&lt;/p&gt;&lt;p&gt;The density &lt;em&gt;d&lt;/em&gt; is the ratio of existing edges to all possible edges ( n*(n-1) ).&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="815"/>
        <source>The density d is the ratio of existing edges to all possible edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="820"/>
        <source>The network density, the ratio of existing edges to all possible edges.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="837"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="974"/>
        <source>SELECTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="840"/>
        <source>Selected nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="844"/>
        <source>The number of selected nodes (vertices).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="847"/>
        <source>Selected edges.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="851"/>
        <source>The number of selected edges.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="864"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="975"/>
        <source>CLICKED NODE</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="866"/>
        <source>Number:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="867"/>
        <source>The node number of the last clicked node.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="868"/>
        <source>The node number of the last clicked node. Zero means no node clicked.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="872"/>
        <source>Node number of the last clicked node. Zero when nothing is clicked.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="874"/>
        <source>In-Degree:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="875"/>
        <source>The inDegree of a node is the sum of all inbound edge weights.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="879"/>
        <source>Out-Degree:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="880"/>
        <source>The outDegree of a node is the sum of all outbound edge weights.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="903"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="976"/>
        <source>CLICKED EDGE</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="905"/>
        <source>Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="906"/>
        <source>The name of the last clicked edge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="911"/>
        <source>The weight of the clicked edge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="916"/>
        <source>The weight of the reciprocal edge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="939"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="977"/>
        <source>DISTRIBUTION</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="980"/>
        <source>Statistics Panel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1008"/>
        <source>Zoom in the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1009"/>
        <source>Zoom in the network. Or press Cltr and use mouse wheel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1010"/>
        <source>Zoom In.

Zooms in the network (Ctrl++).You can also press Cltr and use the mouse wheel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1021"/>
        <source>Zoom out.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1022"/>
        <source>Zoom out of the actual network. Or press Cltr and use mouse wheel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1023"/>
        <source>Zoom out.

Zooms out of the actual network. (Ctrl+-)You can also press Cltr and use the mouse wheel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1036"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1038"/>
        <source>Zoom slider: Drag up to zoom in. 
Drag down to zoom out. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1053"/>
        <source>Rotates the canvas counterclockwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1055"/>
        <source>Rotates the canvas counterclockwise.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1061"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1063"/>
        <source>Rotates the canvas clockwise.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1072"/>
        <source>Rotate slider: Drag to left to rotate clockwise. 
Drag to right to rotate counterclockwise. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1074"/>
        <source>Rotate slider: Drag to left to rotate clockwise. Drag to right to rotate counterclockwise. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1085"/>
        <source>Reset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1087"/>
        <source>Reset zoom and rotation to zero (or press Ctrl+0)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1088"/>
        <location filename="../src/mainwindow/init/mainwindow_init_panels.cpp" line="1089"/>
        <source>Reset zoom and rotation to zero (Ctrl+0)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_settings.cpp" line="140"/>
        <source>Error loading settings file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_settings.cpp" line="141"/>
        <source>Error loading settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_settings.cpp" line="142"/>
        <source>Error! 
I cannot read the settings file in 
 %1 
You can continue using SocNetV with default settings but any changes to them will not  be saved for future sessions 
Please, check permissions in your home folder  and contact the developer team.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_settings.cpp" line="292"/>
        <source>Error writing settings file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_settings.cpp" line="293"/>
        <source>Error writing settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/init/mainwindow_init_settings.cpp" line="294"/>
        <source>I cannot write the settings file in 
 %1 
You can continue using SocNetV with default settings but any changes to them will not  be saved for future sessions 
Please, check permissions in your home folder  and contact the developer team.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="143"/>
        <source>Placing nodes in random positions. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="144"/>
        <source>Nodes in random positions.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="166"/>
        <source>Placing nodes in random concentric circles. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="169"/>
        <source>Nodes in random concentric circles.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="193"/>
        <source>Please select or click one node first.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="200"/>
        <source>Computing ego radial layout. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="202"/>
        <source>Ego radial layout centered on vertex %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="225"/>
        <source>Eades Spring Embedder — Size Warning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="226"/>
        <source>The Eades Spring Embedder was designed for graphs with fewer than 30 nodes.

This network has %1 nodes. The layout may get stuck in local minima and the result may not be aesthetically pleasing.

Consider using the Fruchterman-Reingold or Kamada-Kawai models instead, which handle larger graphs better.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="235"/>
        <source>Computing Spring-Gravitational (Eades) layout. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="236"/>
        <source>Spring-Gravitational (Eades) model embedded.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="255"/>
        <source>Computing Fruchterman &amp; Reingold layout. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="256"/>
        <source>Fruchterman &amp; Reingold model embedded.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="273"/>
        <source>Computing Kamada &amp; Kawai layout. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="274"/>
        <source>Kamada &amp; Kawai model embedded.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="325"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="459"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="593"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="725"/>
        <source>Katz Centrality not computed yet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="326"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="460"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="594"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="726"/>
        <source>Katz Centrality needs an attenuation factor (alpha) that only Analyze &gt; Centrality &gt; Katz Centrality asks for - this Layout menu has no way to prompt for it.

Please compute Katz Centrality from the Analyze menu first, then try this layout again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="337"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="471"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="605"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="737"/>
        <source>Bonacich Power Centrality not computed yet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="338"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="472"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="606"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="738"/>
        <source>Bonacich Power Centrality needs parameters (alpha, beta) that only Analyze &gt; Centrality &gt; Bonacich Power Centrality asks for - this Layout menu has no way to prompt for them.

Please compute Bonacich Power Centrality from the Analyze menu first, then try this layout again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="363"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="497"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="629"/>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="761"/>
        <source>Please note that this function is &lt;b&gt;CPU-intensive&lt;/b&gt; on large networks (n&gt;200), since it will calculate  a (n x n) matrix A with: &lt;br&gt;Aii=1+weighted_degree_ni &lt;br&gt;Aij=1 if (i,j)=0 &lt;br&gt;Aij=1-wij if (i,j)=wij &lt;br&gt;Next, it will compute the inverse matrix C of A. The computation of the inverse matrix is a CPU intensive function although it uses LU decomposition. &lt;br&gt;This can take a while on large networks, but the app stays responsive while it works in the background. &lt;br&gt;Are you sure you want to continue?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="407"/>
        <source>Computing %1 radial layout. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="408"/>
        <source>Nodes in inner circles have higher %1 score. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="541"/>
        <source>Computing %1 level layout. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="542"/>
        <source>Nodes in upper levels have higher %1 score. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="673"/>
        <source>Computing %1 node size layout. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="674"/>
        <source>Bigger nodes have greater %1 score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="805"/>
        <source>Computing %1 node color layout. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="806"/>
        <source>Nodes with warmer color have greater %1 score.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="833"/>
        <source>Network is fully connected — only one component.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="834"/>
        <source>Network is fully connected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="835"/>
        <source>All nodes belong to a single connected component. No coloring applied.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="855"/>
        <source>Nodes colored by component: %1 components found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="875"/>
        <source>Layout Guides are displayed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/layout/mainwindow_layout.cpp" line="881"/>
        <source>Layout Guides removed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/lifecycle/mainwindow_lifecycle.cpp" line="35"/>
        <source>Closing SocNetV. Bye!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/lifecycle/mainwindow_lifecycle.cpp" line="60"/>
        <source>Save changes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/lifecycle/mainwindow_lifecycle.cpp" line="61"/>
        <source>Modified network has not been saved!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/lifecycle/mainwindow_lifecycle.cpp" line="62"/>
        <source>Do you want to save the changes to the network file?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="50"/>
        <source>&amp;%1  %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="111"/>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="542"/>
        <source>GraphML (*.graphml *.xml);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="114"/>
        <source>Pajek (*.net *.paj *.pajek);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="117"/>
        <source>Adjacency (*.csv *.sm *.adj *.txt);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="120"/>
        <source>GraphViz (*.dot);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="123"/>
        <source>UCINET (*.dl *.dat);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="126"/>
        <source>GML (*.gml);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="130"/>
        <source>Weighted Edge List (*.txt *.list *.edgelist *.lst *.wlst);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="133"/>
        <source>Simple Edge List (*.txt *.list *.edgelist *.lst);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="136"/>
        <source>Two-Mode Sociomatrix (*.2sm *.aff);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="139"/>
        <source>GraphML (*.graphml *.xml);;GML (*.gml *.xml);;Pajek (*.net *.pajek *.paj);;UCINET (*.dl *.dat);;Adjacency (*.csv *.adj *.sm *.txt);;GraphViz (*.dot);;Weighted Edge List (*.txt *.edgelist *.list *.lst *.wlst);;Simple Edge List (*.txt *.edgelist *.list *.lst);;Two-Mode Sociomatrix (*.2sm *.aff);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="167"/>
        <source>Choose a network file...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="176"/>
        <source>Nothing to do...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="220"/>
        <source>GraphML</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="221"/>
        <source>GML</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="222"/>
        <source>Pajek</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="223"/>
        <source>UCINET</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="225"/>
        <source>GraphViz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="226"/>
        <source>Edge List (weighted)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="227"/>
        <source>Edge List (simple, non-weighted)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="228"/>
        <source>Two-mode sociomatrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="233"/>
        <source>Selected file has ambiguous file extension!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="234"/>
        <source>You selected: %1 
The name of this file has either an unknown extension 
or an extension used by different network file formats.

SocNetV supports the following social network file formats. 
In parentheses the expected extension. 
- GraphML (.graphml or .xml)
- GML (.gml or .xml)
- Pajek (.paj or .pajek or .net)
- UCINET (.dl .dat) 
- GraphViz (.dot)
- Adjacency Matrix (.csv, .txt, .sm or .adj)
- Simple Edge List (.list or .lst)
- Weighted Edge List (.wlist or .wlst)
- Two-Mode / affiliation (.2sm or .aff) 

If you are sure the file is of a supported format, please 
select the right format from the list below.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="296"/>
        <source>Opening network file aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="369"/>
        <source>Opening aborted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="460"/>
        <source>Saving file...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="464"/>
        <source>Nothing to save. There are no vertices.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="468"/>
        <source>Graph already saved.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="507"/>
        <source>Save to GraphML?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="508"/>
        <source>Default File Format: GraphML </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="509"/>
        <source>This network will be saved in GraphML format which is the default file format of SocNetV. 

Is this OK? 

If not, press Cancel, then go to Network &gt; Export menu to see other supported formats to export your data to.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="524"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="480"/>
        <source>Save aborted...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="537"/>
        <source>Enter or select a filename to save the network...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="541"/>
        <source>Save Network to GraphML File Named...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="552"/>
        <source>Appending .graphml extension.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="553"/>
        <source>Missing file extension. 
Appended the standard .graphml extension to the given filename.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="555"/>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="567"/>
        <source>Final Filename: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="564"/>
        <source>Using .graphml extension.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="565"/>
        <source>Wrong file extension. 
Appended the standard .graphml extension to the given filename.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="577"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="410"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="452"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="592"/>
        <source>Saving aborted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="597"/>
        <source>Error! Could not save this file: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="614"/>
        <source>Network saved under filename: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="626"/>
        <source>Closing network file...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="639"/>
        <source>Closing Network...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="640"/>
        <source>Network has not been saved. 
Do you want to save before closing it?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="656"/>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="672"/>
        <source>Ready.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="665"/>
        <source>Printing...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="690"/>
        <source>No file selected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="705"/>
        <source>Cannot read file %1:
%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="762"/>
        <source>Two-Mode Sociomatrix — Select Import Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="763"/>
        <source>Two-mode sociomatrix import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="764"/>
        <source>This file contains a two-mode (bipartite) sociomatrix, where rows represent one set of actors (e.g. persons) and columns represent another set (e.g. events or groups).

How would you like to import it?

Bipartite graph: creates both sets of nodes and connects each person to the events they attend. (Recommended)

Person network: creates only the person nodes and connects two persons if they share at least one event.

Event network: creates only the event nodes and connects two events if they share at least one person.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="776"/>
        <source>Bipartite graph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="777"/>
        <source>Person network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="778"/>
        <source>Event network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="800"/>
        <source>Opt for labels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="801"/>
        <source>Node labels?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="802"/>
        <source>This file contains an adjacency matrix (sociomatrix). Please specify whether there are node labels defined on the first (comment) line. 
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="807"/>
        <source>Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="807"/>
        <source>No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="828"/>
        <source>Column delimiter in file </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="829"/>
        <source>SocNetV supports edge list and adjacency files with arbitrary column delimiters. 
The default delimiter is one or more spaces.

If the column delimiter in this file is other than simple space or TAB, 
please enter it below.

For instance, if the delimiter is a comma or pipe enter &quot;,&quot; or &quot;|&quot; respectively.

Leave empty to use space or TAB as delimiter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="894"/>
        <source>Error loading requested file. Aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="897"/>
        <source>Error loading file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="898"/>
        <source>Error loading network file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="899"/>
        <source>Sorry, the selected file is not in a supported format or encoding, or contains formatting errors. 

The error message was: 

%1

What now? Review the message above to see if it helps you to fix the data file. Try a different codec in the preview window or if the file is of a legacy format (i.e. Pajek, UCINET, GraphViz, etc), please use the options in the Import sub menu. 
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="971"/>
        <source>Unrecognized format. Please specify the file-format using the Import Menu.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="981"/>
        <source>%1 formatted network, named &apos;%2&apos;, loaded. Nodes: %3, Edges: %4, Density: %5. Elapsed time: %6 ms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1036"/>
        <source>Shows the total number of undirected edges in the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1037"/>
        <source>The total number of undirected edges in the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1038"/>
        <source>Undirected data mode. Toggle the menu option Edit-&gt;Edges-&gt;Undirected Edges to change it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1039"/>
        <source>The loaded network, if any, is undirected and 
any edge you add between nodes will be undirected.
If you want to work with directed edges and/or 
transform the loaded network (if any) to directed 
disable the option Edit-&gt;Edges-&gt;Undirected 
or press CTRL+E+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1045"/>
        <source>The loaded network, if any, is undirected and 
any edge you add between nodes will be undirected.
If you want to work with directed edges and/or 
transform the loaded network (if any) to directed 
disable the option Edit-&gt;Edges-&gt;Undirected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1063"/>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1065"/>
        <source>Edges:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1070"/>
        <source>Shows the total number of directed edges in the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1071"/>
        <source>The total number of directed edges in the network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1073"/>
        <location filename="../src/mainwindow/network/mainwindow_network_file.cpp" line="1078"/>
        <source>The loaded network, if any, is directed and 
any link you add between nodes will be a directed arc.
If you want to work with undirected edges and/or 
transform the loaded network (if any) to undirected 
enable the option Edit-&gt;Edges-&gt;Undirected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="106"/>
        <source>Select type...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="107"/>
        <source>Select type of edge list format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="108"/>
        <source>SocNetV can parse two kinds of edgelist formats: 

A. Edge lists with edge weights, where each line has exactly 3 columns: source  target  weight, i.e.:
1 2 1 
2 3 1 
3 4 2 
4 5 1 

B. Simple edge lists without weights, where each line has two or more columns in the form: source, target1, target2, ... , i.e.:
1 2 3 4 5 6
2 3 4 
3 5 8 7

Please select the appropriate type of edge list format of the file you want to load:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="124"/>
        <source>Weighted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="124"/>
        <source>Simple non-weighted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="162"/>
        <source>Opening Image export dialog. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="190"/>
        <source>No filename. Exporting to Image aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="264"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="265"/>
        <source>Network exported to image file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="266"/>
        <source>Image filename: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="272"/>
        <source>Error exporting to image file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="273"/>
        <source>Error while exporting network to image file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="290"/>
        <source>Opening PDF export dialog. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="321"/>
        <source>No filename. Exporting to PDF aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="369"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="370"/>
        <source>Network exported to PDF file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="371"/>
        <source>PDF filename: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="388"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="429"/>
        <source>Exporting active network under new filename...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="391"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="432"/>
        <source>Export Network to File Named...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="392"/>
        <source>Pajek (*.paj *.net *.pajek);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="398"/>
        <source>Missing file extension. I will use .paj instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="399"/>
        <source>Missing file extension. I will use the .paj extension.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="400"/>
        <source>Appending an extension .paj to the given filename...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="433"/>
        <source>Adjacency (*.csv *.txt *.adj *.sm *.net);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="439"/>
        <source>Missing file extension. I will use .csv instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="440"/>
        <source>Missing file extension. I will use the .csv  extension.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="441"/>
        <source>Appending an extension .csv  to the given filename...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="461"/>
        <source>Weighted graph. Social network with valued/weighted edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="462"/>
        <source>Social network with valued/weighted edges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="463"/>
        <source>This social network includes valued/weighted edges (the depicted graph is weighted). Do you want to save the edge weights in the adjacency file?
Select Yes if you want to save edge values in the resulting file. 
Select No, if you don&apos;t want edge values to be saved. In the later case, all non-zero values will be truncated to 1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="503"/>
        <source>Exporting active relation to GraphViz DOT file…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="510"/>
        <source>Multi-relation graph — GraphViz DOT format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="511"/>
        <source>GraphViz DOT supports a single graph. Only the currently active relation &quot;%1&quot; will be written.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="518"/>
        <source>Export Network to GraphViz DOT File…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="520"/>
        <source>GraphViz DOT (*.dot);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="524"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="558"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="646"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="663"/>
        <source>Export aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="548"/>
        <source>Exporting network to UCINET DL file…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="552"/>
        <source>Export Network to UCINET DL File…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="554"/>
        <source>UCINET DL (*.dl *.dat);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="582"/>
        <source>Saving network under new filename...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="620"/>
        <source>Multi-relation graph — Edge List format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="621"/>
        <source>Edge List format supports a single relation. Only the currently active relation &quot;%1&quot; will be written.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="632"/>
        <source>Include edge weights?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="634"/>
        <source>This network has weighted edges. Do you want to include edge weights in the exported file?

Yes → weighted edge list (source target weight)
No  → simple edge list (source target)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="651"/>
        <source>Exporting active relation to Edge List file…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="654"/>
        <source>Weighted Edge List (*.wlst *.csv *.txt);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="655"/>
        <source>Simple Edge List (*.lst *.csv *.txt);;All (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="659"/>
        <source>Export Network to Edge List File…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="683"/>
        <source>Export Nodes as CSV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="683"/>
        <source>nodes.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="684"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="701"/>
        <source>CSV files (*.csv)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="688"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="722"/>
        <source>Nodes exported to %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="690"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="707"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="724"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="741"/>
        <source>Export failed: could not write to %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="700"/>
        <source>Export Edges as CSV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="700"/>
        <source>edges.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="705"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="739"/>
        <source>Edges exported to %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="717"/>
        <source>Export Nodes as JSON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="717"/>
        <source>nodes.json</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="718"/>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="735"/>
        <source>JSON files (*.json)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="734"/>
        <source>Export Edges as JSON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_import_export.cpp" line="734"/>
        <source>edges.json</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="130"/>
        <source>Generate a random Erdos-Renyi network. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="164"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="185"/>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="225"/>
        <source>Erdős–Rényi network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="175"/>
        <source>Creating new Erdos-Renyi random network. Please wait... </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="179"/>
        <source>Erdős–Rényi network creation cancelled or did not finish.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="187"/>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="198"/>
        <source>Erdős–Rényi random network created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="188"/>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="199"/>
        <source>Random network created. 
A new random network has been created according to the Erdős–Rényi model.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="190"/>
        <source>On average, edges should be %1. This graph is almost surely connected because: 
probability &gt; ln(n) that is: %2 &lt; %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="201"/>
        <source>On average, edges should be %1. This graph is almost surely not connected because: 
probability &lt; ln(n) that is: %2 &lt; %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="224"/>
        <source>Generate a random Scale-Free network. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="258"/>
        <source>Creating new scale-free random network. Please wait... </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="262"/>
        <source>Scale-free network creation cancelled or did not finish.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="268"/>
        <source>Scale-free random network created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="269"/>
        <source>Random network created. 
A new scale-free random network with %1 nodes has been created according to the Barabási–Albert model.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="272"/>
        <source>A scale-free network is a network whose degree distribution follows a power law.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="290"/>
        <source>Generate a random Small-World network. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="323"/>
        <source>Creating new small-world random network. Please wait... </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="327"/>
        <source>Small-world network creation cancelled or did not finish.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="333"/>
        <source>Small-World random network created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="334"/>
        <source>Random network created. 
A new random network with %1 nodes has been created according to the Watts &amp; Strogatz model.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="337"/>
        <source>A small-world network has short average path lengths and high clustering coefficient.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="355"/>
        <source>Generate a d-regular random network. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="383"/>
        <source>Creating new d-regular random network. Please wait... </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="387"/>
        <source>d-regular network creation cancelled or did not finish.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="393"/>
        <source>d-regular network created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="394"/>
        <source>Random network created. 
A new d-regular random network with %1 nodes has been created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="397"/>
        <source>Each node has the same number &lt;em&gt;%1&lt;/em&gt; of neighbours, aka the same degree d.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="427"/>
        <source>Create ring lattice</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="428"/>
        <source>This will create a ring lattice network, where each node has degree d:
 d/2 edges to the right and d/2 to the left.
Please enter the number of nodes you want:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="441"/>
        <source>Create ring lattice...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="442"/>
        <source>Now, enter an even number d. 
This is the total number of edges each new node will have:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="451"/>
        <source>Error. Cannot create such network.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="452"/>
        <source>Error. Cannot create such network!

The degree %1 is not an even number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="455"/>
        <source>A ring lattice is a graph with N vertices each connected to d neighbors, d / 2 on each side. 
Please try again entering an even number as degree.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="468"/>
        <source>Creating new ring-lattice random network. Please wait... </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="477"/>
        <source>Ring lattice random network created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="478"/>
        <source>Random network created. 
A new ring-lattice random network with %1 nodes has been created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="481"/>
        <source>A ring lattice is a graph with N vertices each connected to d neighbors, d / 2 on each side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="493"/>
        <source>Generate a lattice network. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="532"/>
        <source>Creating new lattice random network. Please wait... </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="536"/>
        <source>Lattice network creation cancelled or did not finish.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="542"/>
        <source>Lattice random network created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="543"/>
        <source>Random network created. 
A new lattice random network with %1 nodes has been created.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_random.cpp" line="546"/>
        <source>A lattice is a network whose drawing forms a regular tiling. Lattices are also known as meshes or grids.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="108"/>
        <source>Displaying network data file %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="119"/>
        <source>New network not saved yet. You might want to save it first.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="120"/>
        <source>This new network you created has not been saved yet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="121"/>
        <source>Do you want to open a file dialog to save your work (then I will display the file)?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="138"/>
        <source>Current network has been modified. Save to the original file?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="139"/>
        <source>Current social network has been modified since last save.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="140"/>
        <source>Do you want to save it to the original file?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="171"/>
        <source>New Network File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="174"/>
        <source>Enter your network data here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="214"/>
        <source>Creating and writing adjacency matrix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="236"/>
        <source>Adjacency matrix saved as </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="260"/>
        <source>Very large network to plot!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="261"/>
        <source>Warning: Really large network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="262"/>
        <source>To plot a %1 x %1 matrix arranged in HTML table, I will need time to write a very large .html file , circa %2 MB in size. Instead, I can create a simpler / smaller HTML file without table. Press Yes to continue with simpler version, Press No to create large file with HTML table.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="286"/>
        <source>Creating plot of adjacency matrix of %1 nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_view.cpp" line="303"/>
        <source>Visual form of adjacency matrix saved as </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_web.cpp" line="97"/>
        <source>No SSL support.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_web.cpp" line="98"/>
        <source>I cannot verify that your computer Operating System has OpenSSL support. 

OpenSSL is an  Open Source software library for the Transport Layer Security (TLS) protocol (aka SSL), for applications that secure communications over computer networks. It is widely used by Internet servers, including the majority of HTTPS websites. 

Without OpenSSL libraries installed in your computer, I cannot crawl webpages/URLs using https:// 

So, please download and install OpenSSL in your OS and try again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/network/mainwindow_network_web.cpp" line="102"/>
        <source>Hint: Go to Help &gt; System Information to see which OpenSSL version you need to install.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="188"/>
        <source>Toggle Nodes Numbers. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="194"/>
        <source>Node Numbers are invisible now. Click the same option again to display them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="199"/>
        <source>Node Numbers are visible again...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="215"/>
        <source>Toggle Numbers inside nodes. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="228"/>
        <source>Numbers inside nodes...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="232"/>
        <source>Numbers outside nodes...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="248"/>
        <source>Toggle Nodes Labels. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="256"/>
        <source>Node Labels are invisible now. Click the same option again to display them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="261"/>
        <source>Node Labels are visible again...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="279"/>
        <source>Toggle Edges. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="284"/>
        <source>Edges are invisible now. Click again the same menu to display them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="288"/>
        <source>Edges visible again...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="302"/>
        <source>Toggling Edges&apos; Arrows. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="308"/>
        <source>Arrows in edges: on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="312"/>
        <source>Arrows in edges: off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="325"/>
        <source>Changed edge arrow size to %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="351"/>
        <source>Toggle edges bezier. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="354"/>
        <source>Edges drawn as %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="354"/>
        <source>Bezier curves</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="354"/>
        <source>straight lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="390"/>
        <source>Change all edges offset from their nodes to: (1-16)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="394"/>
        <source>Change edge offset aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="413"/>
        <source>Changed edge offset from nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="425"/>
        <source>Toggle Edges Weights. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="432"/>
        <source>Edge weights are invisible now. Click the same option again to display them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="437"/>
        <source>Edge weights are visible again...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="451"/>
        <source>Toggle Edges Labels. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="459"/>
        <source>Edge labels are invisible now. Click the same option again to display them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="464"/>
        <source>Edge labels are visible again...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="477"/>
        <source>Toggle zero-weight edges saving. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="483"/>
        <source>Zero-weight edges will be saved to graphml files. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="487"/>
        <source>Zero-weight edges will NOT be saved to graphml files.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="502"/>
        <source>Zero-weight edges will be drawn on the canvas.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="503"/>
        <source>Zero-weight edges will not be drawn on the canvas.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="512"/>
        <source>Toggle openGL. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="522"/>
        <source>Using openGL off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="527"/>
        <source>Using OpenGL on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="541"/>
        <source>Toggle anti-aliasing. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="550"/>
        <source>Anti-aliasing off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="555"/>
        <source>Anti-aliasing on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="569"/>
        <source>Toggle anti-aliasing auto adjust. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="578"/>
        <source>Antialiasing auto-adjustment off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="583"/>
        <source>Antialiasing auto-adjustment on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="598"/>
        <source>Toggle smooth pixmap transformations. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="606"/>
        <source>Smooth pixmap transformations off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="612"/>
        <source>Smooth pixmap transformations on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="627"/>
        <source>Toggle saving painter state. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="635"/>
        <source>Saving painter state off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="641"/>
        <source>Saving painter state on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="656"/>
        <source>Toggle canvas background caching state. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="664"/>
        <source>Canvas background caching  off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="670"/>
        <source>Canvas background caching  on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="685"/>
        <source>Toggle edge highlighting state. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="693"/>
        <source>Edge highlighting off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="699"/>
        <source>Edge highlighting on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="714"/>
        <source>Setting canvas update mode. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="745"/>
        <source>Canvas update mode: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="762"/>
        <source>Setting canvas index method. Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="781"/>
        <source>Canvas index method: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="795"/>
        <source>SocNetV logo print off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="801"/>
        <source>SocNetV logo print on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="812"/>
        <source>Toggle progressbar...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="816"/>
        <source>Progress bars off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="821"/>
        <source>Progress bars on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="838"/>
        <source>Debug messages off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="846"/>
        <source>Debug messages on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="871"/>
        <source>Background changed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="888"/>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="915"/>
        <source>Toggle BackgroundImage...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="892"/>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="918"/>
        <source>BackgroundImage off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="899"/>
        <source>Select one image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="900"/>
        <source>Images (*.png *.jpg *.jpeg);;All (*.*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="940"/>
        <source>Full screen mode off. Press F11 again to enter full screen.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="945"/>
        <source>Full screen mode on. Press F11 again to exit full screen.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="956"/>
        <source>Toggle toolbar...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="961"/>
        <source>Toolbar off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="967"/>
        <source>Toolbar on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="977"/>
        <source>Toggle statusbar...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="983"/>
        <source>Status bar off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="989"/>
        <source>Status bar on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="999"/>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="1021"/>
        <source>Toggle left panel...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="1005"/>
        <source>Left Panel off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="1011"/>
        <source>Left Panel on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="1027"/>
        <source>Right Panel off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="1033"/>
        <source>Right Panel on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/options/mainwindow_options.cpp" line="1081"/>
        <source>Cannot read stylesheet file %1:
%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="254"/>
        <source>Filtering unilateral edges (script)...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="393"/>
        <source>Filtering ego network (script)...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="418"/>
        <source>Filtering isolate nodes (script)...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="445"/>
        <source>Symmetrizing strong ties (script)...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="461"/>
        <source>Computing cocitation relation (script)...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="530"/>
        <source>Computing geodesic distances (benchmark, no disk write). Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="1171"/>
        <source>Computing graph diameter (script). Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow/scripting/mainwindow_interactive_script.cpp" line="1205"/>
        <source>Computing Average Graph Distance (script). Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/mainwindow.cpp" line="249"/>
        <source>Welcome to %1, version %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NodeTableModel</name>
    <message>
        <location filename="../src/widgets/nodetablemodel.cpp" line="145"/>
        <source>#</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/nodetablemodel.cpp" line="146"/>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/nodetablemodel.cpp" line="147"/>
        <source>Visible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/nodetablemodel.cpp" line="148"/>
        <source>Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/nodetablemodel.cpp" line="149"/>
        <source>Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/widgets/nodetablemodel.cpp" line="150"/>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Parser</name>
    <message>
        <location filename="../src/parser/parser_adjacency.cpp" line="130"/>
        <source>Invalid adjacency-formatted file. Non-comment line %1 includes reserved keywords (&apos;%2&apos;). Parsing aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_adjacency.cpp" line="147"/>
        <source>Invalid Adjacency-formatted file. Node labels line is empty or improperly formatted. Parsing aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_adjacency.cpp" line="164"/>
        <source>Invalid Adjacency-formatted file. Row %1 at line %2 has a different number of elements (%3) than expected (%4). Parsing aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_adjacency.cpp" line="217"/>
        <source>fileLine: %1 is a comment...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_adjacency.cpp" line="249"/>
        <source>Invalid Adjacency-formatted file. Not a NxN matrix. Row %1 declares %2 edges. Expected: %3. Parsing aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_adjacency.cpp" line="310"/>
        <source>Error reading Adjacency-formatted file. Element (%1, %2) contains invalid data (&apos;%3&apos;). Parsing aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_adjacency.cpp" line="419"/>
        <source>Invalid two-mode sociomatrix file. Non-comment line %1 includes keywords reserved by other file formats (vertices, graphml, network, graph, digraph, DL, xml)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_adjacency.cpp" line="432"/>
        <source>Invalid two-mode sociomatrix file. Row %1 has a different number of elements than the first data row.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_adjacency.cpp" line="445"/>
        <source>Invalid two-mode sociomatrix file: no data rows found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="129"/>
        <source>Invalid UCINET-formatted file. The file does not start with DL in first non-comment line %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="199"/>
        <source>Problem interpreting UCINET-formatted file. Cannot convert N value to integer at line %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="212"/>
        <source>Problem interpreting UCINET-formatted file. Cannot convert NM value to integer at line %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="225"/>
        <source>Problem interpreting UCINET-formatted file. Cannot convert NR value to integer at line %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="238"/>
        <source>Problem interpreting UCINET-formatted file. Cannot convert NC value to integer at line %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="261"/>
        <location filename="../src/parser/parser_dl.cpp" line="952"/>
        <source>Invalid UCINET format declaration. Expected &apos;FULLMATRIX&apos; or &apos;edgelist&apos; but found: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="536"/>
        <source>Error reading UCINET-formatted file: Number of nodes found (%1) does not match declared N=%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="575"/>
        <source>Matrix row size mismatch. Expected %1 but got %2 at line %3.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="622"/>
        <source>Problem interpreting UCINET fullmatrix-formatted file. In edge (%1-&gt;%2), the weight (%3) could not be converted to number, at line %4.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="687"/>
        <source>Problem interpreting UCINET two-mode fullmatrix-formatted file. The file declared %1 columns initially, but I found a different number %2 of matrix columns, at line %3.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="700"/>
        <source>Problem interpreting UCINET two-mode file. In edge (%1-&gt;%2), the weight (%3) cannot be converted to number, at line %4.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="744"/>
        <source>Problem interpreting UCINET-formatted file. The file was declared as edgelist but I found a line which did not have 3 elements (source, target, weight), at line %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="882"/>
        <source>Error while reading UCINET-formatted file. Cannot convert N value to integer. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="895"/>
        <source>Problem interpreting UCINET file. Cannot convert NM value to integer. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="908"/>
        <source>Error while reading UCINET-formatted file. Cannot convert NR value to integer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dl.cpp" line="921"/>
        <source>Error while reading UCINET-formatted file. Cannot convert NC value to integer. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dot.cpp" line="106"/>
        <source>Invalid GraphViz (dot) file. The file does not contain &apos;digraph&apos; or &apos;graph&apos;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dot.cpp" line="144"/>
        <source>Not a GraphViz-formatted file. First non-comment line includes keywords reserved by other file formats (i.e vertices, graphml, network, DL, xml).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dot.cpp" line="179"/>
        <source>Not properly GraphViz-formatted file. First non-comment line should start with &quot;(di)graph netname {&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dot.cpp" line="266"/>
        <source>Not properly GraphViz-formatted file. Node definition without opening [</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dot.cpp" line="276"/>
        <source>Not properly GraphViz-formatted file. Node definition without closing ]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_dot.cpp" line="390"/>
        <source>Invalid DOT edge statement: mixed &apos;-&gt;&apos; and &apos;--&apos; operators on the same line.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_edgelist.cpp" line="111"/>
        <source>Not an EdgeList-formatted file. A non-comment line includes keywords reserved by other file formats (i.e vertices, graphml, network, graph, digraph, DL, xml)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_edgelist.cpp" line="122"/>
        <source>Not a properly EdgeList-formatted file. Row %1 has not 3 elements as expected (i.e. source, target, weight)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_edgelist.cpp" line="434"/>
        <source>Not an EdgeList-formatted file. Non-comment line %1 includes keywords reserved by other file formats (i.e vertices, graphml, network, graph, digraph, DL, xml)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_gml.cpp" line="336"/>
        <source>Not an GML-formatted file. Non-comment line %1 includes keywords reserved by other file formats  (i.e vertices, graphml, network, digraph, DL, xml)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_gml.cpp" line="395"/>
        <source>Not a proper GML-formatted file. Node id tag at line %1 has non-arithmetic value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_gml.cpp" line="445"/>
        <source>Not a proper GML-formatted file. Edge source tag at line %1 has non-arithmetic value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_gml.cpp" line="466"/>
        <source>Not a proper GML-formatted file. Edge target tag at line %1 has non-arithmetic value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_gml.cpp" line="487"/>
        <source>Not a proper GML-formatted file. Edge weight tag at line %1 has an invalid value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_gml.cpp" line="522"/>
        <location filename="../src/parser/parser_gml.cpp" line="530"/>
        <source>Not a proper GML-formatted file. Node center tag at line %1 cannot be converted to qreal.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_gml.cpp" line="553"/>
        <source>Not a proper GML-formatted file. Node type tag at line %1 has no value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_gml.cpp" line="570"/>
        <source>Not a proper GML-formatted file. Node fill tag at line %1 has no value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_graphml.cpp" line="132"/>
        <source>Invalid GraphML file. XML at startElement but element name not graphml.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_graphml.cpp" line="143"/>
        <source>Invalid GraphML file. XML tokenString at line %1 invalid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_graphml.cpp" line="165"/>
        <source>Invalid GraphML file. XML has error at line %1, token name %2:

%3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_pajek.cpp" line="112"/>
        <source>Not a Pajek-formatted file. First not-comment line %1 (at file line %2) does not start with Network or Vertices</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_pajek.cpp" line="127"/>
        <source>Not a Pajek-formatted file. First not-comment line does not start with Network or Vertices</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_pajek.cpp" line="498"/>
        <source>Invalid Pajek-formatted file. It declares a node with nodeNumber smaller than previous nodes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_pajek.cpp" line="564"/>
        <source>Invalid Pajek-formatted file. The file declares an edge with a zero source or target nodeNumber. However, each node should have a nodeNumber &gt; 0.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_pajek.cpp" line="651"/>
        <source>Invalid Pajek-formatted file. The file declares arc with a zero source or target nodeNumber. However, each node should have a nodeNumber &gt; 0.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_pajek.cpp" line="774"/>
        <source>Invalid Pajek-formatted file. Could not find node declarations in this file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser.cpp" line="183"/>
        <source>Cannot open file: %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/engine/distance_engine.cpp" line="309"/>
        <source>Computing geodesic distances. 
Please wait...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_graphml.cpp" line="129"/>
        <source>not a GraphML file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_graphml.cpp" line="140"/>
        <source>invalid GraphML or encoding.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/parser/parser_graphml.cpp" line="410"/>
        <source> Default custom icon for nodes does not exist in the filesystem. 
The declared icon file was: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TextEditor</name>
    <message>
        <location filename="../src/texteditor.cpp" line="91"/>
        <source>Save file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="106"/>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="107"/>
        <source>Ctrl+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="108"/>
        <source>Create a new file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="111"/>
        <source>&amp;Open...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="112"/>
        <source>Ctrl+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="113"/>
        <source>Open an existing file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="116"/>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="117"/>
        <source>Ctrl+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="118"/>
        <source>Save the document to disk</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="121"/>
        <source>Save &amp;As...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="122"/>
        <source>Save the document under a new name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="125"/>
        <source>E&amp;xit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="126"/>
        <source>Ctrl+Q</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="127"/>
        <source>Exit the application</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="130"/>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="131"/>
        <source>Ctrl+X</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="132"/>
        <source>Cut the current selection&apos;s contents to the clipboard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="136"/>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="137"/>
        <source>Ctrl+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="138"/>
        <source>Copy the current selection&apos;s contents to the clipboard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="142"/>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="143"/>
        <source>Ctrl+V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="144"/>
        <source>Paste the clipboard&apos;s contents into the current selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="148"/>
        <source>&amp;About</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="149"/>
        <source>Show the application&apos;s About box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="152"/>
        <source>About &amp;Qt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="153"/>
        <source>Show the Qt library&apos;s About box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="166"/>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="174"/>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="181"/>
        <source>&amp;Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="188"/>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="193"/>
        <source>Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="201"/>
        <source>Ready</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="224"/>
        <source>TextEditor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="225"/>
        <source>The document has been modified.
Do you want to save your changes?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="240"/>
        <location filename="../src/texteditor.cpp" line="264"/>
        <location filename="../src/texteditor.cpp" line="299"/>
        <source>SocNetV Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="241"/>
        <source>Cannot read file %1:
%2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="256"/>
        <source>File loaded</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="265"/>
        <source>Cannot write file %1:
%2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="282"/>
        <source>File saved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/texteditor.cpp" line="299"/>
        <source>%1[*] - %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../src/main.cpp" line="90"/>
        <source>Network file to load on startup. You can load a network from a file using `socnetv file.net` where file.net/csv/dot/graphml must be of valid format. See README.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="94"/>
        <source>Force showing progress dialogs/bars during computations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="98"/>
        <source>Do not maximize the app window.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="102"/>
        <source>Show in full screen mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="107"/>
        <source>Print debug messages to stdout/console. Available verbosity &lt;level&gt;s: &apos;none&apos;, &apos;min&apos; or &apos;full&apos;. Default: &apos;min&apos;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="108"/>
        <source>level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="114"/>
        <source>Load the startup &lt;file&gt; with this text encoding (e.g. &apos;UTF-8&apos;), bypassing the encoding preview dialog.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="115"/>
        <source>encoding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="120"/>
        <source>Run the interactive script at &lt;path&gt; after startup. One command per line: &apos;delay X&apos; (wait X seconds) or &apos;new&apos; (File &gt; New).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="121"/>
        <source>path</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
