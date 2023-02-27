export default function Trie() {
  var root = Node();

  return Object.freeze({
    add,
    contains,
    remove,
    getWords,
    getWordsWithPrefix,
    toArray,
    toString,
  });

  function Node() {
    var node = {
      data: null,
      children: {},
      isEnd: false,
    };
    return node;
  }

  function addPrivate(word, node = root) {
    if (!word) {
      node.isEnd = true;
      return;
    }

    var letter = word[0];
    var child = node.children[letter];

    if (!child) {
      child = Node();
      node.children[letter] = child;
    }

    addPrivate(word.slice(1), child);
  }

  function add(word) {
    addPrivate(word);
  }

  function containsPrivate(word, node = root) {
    if (!word) {
      return false;
    }

    var letter = word[0];
    var child = node.children[letter];

    if (!child) {
      return false;
    }

    if (word.length === 1) {
      return child.isEnd;
    }

    return containsPrivate(word.slice(1), child);
  }

  function contains(word) {
    return containsPrivate(word);
  }

  function removePrivate(word, node = root) {
    if (!word) {
      return false;
    }

    var letter = word[0];
    var child = node.children[letter];

    if (!child) {
      return false;
    }

    if (word.length === 1) {
      if (Object.keys(child.children).length > 0) {
        child.isEnd = false;
        return true;
      }

      delete node.children[letter];
      return true;
    }

    var result = removePrivate(word.slice(1), child);

    if (result && Object.keys(child.children).length === 0 && !child.isEnd) {
      delete node.children[letter];
    }

    return result;
  }

  function remove(word) {
    return removePrivate(word);
  }

  function getWordsPrivate(node = root, words = [], word = "") {
    if (node.isEnd) {
      words.push(word);
    }

    for (let letter in node.children) {
      getWordsPrivate(node.children[letter], words, word + letter);
    }

    return words;
  }

  function getWords() {
    return getWordsPrivate();
  }

  function getWordsWithPrefix(prefix) {
    var words = [];

    if (!prefix) {
      return words;
    }

    function helper(node, word, prefix) {
      if (!node) {
        return;
      }

      if (prefix.length === 0) {
        words = words.concat(getWordsPrivate(node, [], word));
        return;
      }

      var letter = prefix[0];
      var child = node.children[letter];

      if (!child) {
        return;
      }

      helper(child, word + letter, prefix.slice(1));
    }

    helper(root, "", prefix);

    return words;
  }

  function toArray() {
    return getWords();
  }

  function toString() {
    return getWords().toString();
  }
}
